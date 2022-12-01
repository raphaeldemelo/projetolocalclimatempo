import React, { useState } from 'react';
import { apiClima } from '../../services/api';
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
    Input,
    BotaoSearch,
    Card,
    Separator,
    BotaoLimpar,
    InfoCard,
} from './styles';

export default function Previsao() {

    const [loading, setLoading] = useState(false);
    const [local, setLocal] = useState('');
    const [climaLocal, setClimaLocal] = useState('');
    const [regiao, setRegiao] = useState(local)

    async function BuscarPrevisao() {
        if (local === '') {
            toast.warning('Ops, campo em branco')
            setLocal('');
            return;
        }

        try {
            setLoading(true)
            const response = await apiClima.get(`${local}`);
            setLoading(false)
            setRegiao(local)
            setClimaLocal(response.data)
        } catch (error) {
            toast.error('Ops! pesquise por uma cidade')
        }
    }

    function Limpar() {
        setClimaLocal('')
        setLocal('')
    }

    return (
        <Container>
            <Menu />
            <Main>
                <Section>
                    <Article>
                        <Titulo>Previsão do Tempo</Titulo>
                        <SubTitulo>Pesquise por uma cidade que retornaremos a temperatura da região</SubTitulo>
                    </Article>

                    <AreaInput>
                        <Input
                            type='text'
                            placeholder='Digite uma cidade...'
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                        />
                        <BotaoSearch onClick={() => BuscarPrevisao()}>
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
                            {!climaLocal &&
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

                            {climaLocal &&
                                <>
                                    <Section>
                                        <Article>
                                            <Titulo style={{ fontWeight: 400, fontSize: 18 }}>Cidade encontrada</Titulo>
                                            <Separator size={1} />
                                        </Article>

                                        <Card style={{ display: 'flex', height: '100%', padding: 100 }}>
                                            <InfoCard style={{ fontWeight: 200, fontSize: 18 }}>{climaLocal.description}</InfoCard>
                                            <InfoCard>{climaLocal.temperature} teste</InfoCard>
                                            <InfoCard style={{ fontWeight: 200, fontSize: 26 }}>{regiao}</InfoCard>
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