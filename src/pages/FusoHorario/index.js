import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/user';
import { key, apiFusoLocal } from '../../services/api';
import { toast } from 'react-toastify';
import Lottie from "lottie-react";
import naoencontrado from '../../assets/naoencontrado.json'
import Loading from '../../components/Loading';
import Menu from '../../components/Header';
import Footer from '../../components/Footer';
import { FiSearch } from 'react-icons/fi'
import {
    Container,
    Main,
    Section,
    Article,
    Titulo,
    SubTitulo,
    AreaInput,
    BotaoSearch,
    Input,
    Card,
    Separator,
    BotaoLimpar,
    InfoCard,

} from './styles';

export default function FusoHorario() {

    const { setCidade, cidade } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [fusoLocal, setFusoLocal] = useState('');
    const [horario, setHorario] = useState('');

    async function BuscarFusoLocal() {
        if (cidade === '') {
            toast.warning('Ops, campo em branco')
            setCidade('');
            return;
        }

        try {
            setLoading(true)
            const response = await apiFusoLocal.get(`timezone?apiKey=${key}&location=${cidade}`);
            setLoading(false)
            setFusoLocal(response.data.geo)
            setHorario(response.data)
        } catch (error) {
            toast.error('Ops! pesquise por uma cidade')
        }
    }

    function Limpar() {
        setHorario('')
        setFusoLocal('')
        setCidade('')
    }

    return (
        <Container>
            <Menu />
            <Main>
                <Section>
                    <Article>
                        <Titulo>Qual é o Fuso Horário?</Titulo>
                        <SubTitulo>Pesquise por uma cidade que retornaremos o horário dessa localidade</SubTitulo>
                    </Article>

                    <AreaInput>
                        <Input
                            type='text'
                            placeholder='Digite uma cidade...'
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                        <BotaoSearch onClick={() => BuscarFusoLocal()}>
                            <FiSearch size={30} color='#fff' />
                        </BotaoSearch>
                    </AreaInput>
                </Section>

                {loading ?
                    (
                        <>
                            <Section>
                                <Card style={{ display: 'flex', height: 300, alignItems: 'center', justifyContent: 'center' }}>
                                    <Loading />
                                </Card>
                            </Section>
                        </>
                    ) : (
                        <>
                            {!fusoLocal &&
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

                            {fusoLocal &&
                                <>
                                    <Section>
                                        <Article>
                                            <Titulo style={{ fontWeight: 400, fontSize: 18 }}>Cidade encontrada</Titulo>
                                            <Separator size={1} />
                                        </Article>

                                        <Card style={{ display: 'flex', height: '100%', padding: 100 }}>
                                            <InfoCard>{horario.time_24}</InfoCard>
                                            <InfoCard style={{ fontWeight: 200, fontSize: 18 }}>{fusoLocal.city}</InfoCard>
                                        </Card>

                                        <BotaoLimpar onClick={() => Limpar()}>
                                            <Titulo>Limpar</Titulo>
                                        </BotaoLimpar>
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