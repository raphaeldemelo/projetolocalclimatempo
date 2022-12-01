import React, { useContext, useState } from 'react';
import { UserContext } from '../../Contexts/user';
import Lottie from "lottie-react";
import naoencontrado from '../../assets/naoencontrado.json'
import { apiCep } from '../../services/api';
import { FiSearch } from 'react-icons/fi'
import Menu from '../../components/Header';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import { toast } from 'react-toastify';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import {
    Container,
    Titulo,
    SubTitulo,
    Main,
    Section,
    Article,
    Separator,
    AreaInput,
    Input,
    BotaoSearch,
    Card,
    InfoCard,
    BotaoLimpar,
    AreaMapa,
} from './styles';

const markerIcon = new L.Icon({
    iconUrl: require('../../assets/meumarker.png'),
    iconSize: [25, 40],
})

export default function BuscarCep() {

    const { cep, setCep, cepUser, setCepUser, minhaLat, setMinhaLat, minhaLong, setMinhaLong } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };


    async function Buscar() {
        if (cep === '') {
            toast.warning('Ops, precisa informar um cep')
            setCep('');
            return;
        }

        try {
            setLoading(true)
            const response = await apiCep.get(`${cep}`)
            setCepUser(response.data);
            setMinhaLat(response.data.location.coordinates.latitude);
            setMinhaLong(response.data.location.coordinates.longitude);
            setLoading(false)
        } catch (error) {
            toast.error('Ops! pesquise por um cep válido');
        }
    }

    function Limpar() {
        setCepUser(null);
        setCep('');
    }

    return (
        <Container>
            <Menu />

            <Main>
                <Section>
                    <Article>
                        <Titulo>Buscador de CEP</Titulo>
                        <SubTitulo>Pesquise por um cep que retornaremos alguns dados</SubTitulo>
                    </Article>

                    <AreaInput>
                        <Input
                            type='number'
                            placeholder='Digite um cep...'
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <BotaoSearch onClick={() => Buscar()}>
                            <FiSearch size={30} color='#fff' />
                        </BotaoSearch>
                    </AreaInput>
                </Section>


                {loading ?
                    (
                        <Section>
                            <Card style={{ display: 'flex', height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                <Loading />
                            </Card>
                        </Section>
                    ) : (
                        <>
                            {!cepUser &&
                                <Section>
                                    <Article>
                                        <Titulo style={{ fontWeight: 400, fontSize: 18 }}>Nenhuma cidade encontrada</Titulo>
                                        <Separator size={1} />
                                        <Card style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 30 }}>
                                            <Lottie
                                                animationData={naoencontrado}
                                                height={300}
                                                width={300}
                                                loop={true}
                                            />
                                            <Titulo style={{ fontWeight: 400, fontSize: 14 }}>Não encontramos nenhum dado</Titulo>
                                        </Card>
                                    </Article>
                                </Section>
                            }

                            {cepUser &&
                                <>
                                    <Section>
                                        <Article>
                                            <Titulo style={{ fontWeight: 400, fontSize: 18 }}>Cidade encontrada</Titulo>
                                            <Separator size={1} />
                                        </Article>

                                        <Card>
                                            <InfoCard>{cepUser.city}</InfoCard>
                                        </Card>

                                        <Card>
                                            <InfoCard>{cepUser.street}</InfoCard>
                                        </Card>

                                        <Card>
                                            <InfoCard>{cepUser.neighborhood}</InfoCard>
                                        </Card>

                                        <Card>
                                            <InfoCard>{cepUser.cep}</InfoCard>
                                        </Card>

                                        <Card>
                                            <InfoCard>{cepUser.state}</InfoCard>
                                        </Card>

                                        <BotaoLimpar onClick={() => Limpar()}>
                                            <Titulo>Limpar</Titulo>
                                        </BotaoLimpar>
                                    </Section>

                                    <Section>
                                        <Article>
                                            <Titulo style={{ fontWeight: 400, fontSize: 18 }}>Mapa</Titulo>
                                            <Separator size={1} />
                                        </Article>

                                        {minhaLat && minhaLong ? (
                                            <AreaMapa>
                                                <MapContainer
                                                    center={[parseFloat(minhaLat), parseFloat(minhaLong)]}
                                                    zoom={20}
                                                    style={{ width: '100%', height: '400px' }}
                                                    scrollWheelZoom={false}
                                                >
                                                    <TileLayer
                                                        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=3SUvcnHflJqYGxNromNS"
                                                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                                                    />
                                                    <Marker
                                                        icon={markerIcon}
                                                        position={[parseFloat(minhaLat), parseFloat(minhaLong)]}>
                                                        <Popup >
                                                            Aqui está o endereço desse cep
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>
                                            </AreaMapa>
                                        ) : (
                                            <Titulo >Desculpa, Mas não encontramos no mapa esse CEP.</Titulo>
                                        )
                                        }
                                    </Section>
                                </>
                            }
                        </>
                    )
                }
            </Main>
            <Footer />
        </Container>
    );
}