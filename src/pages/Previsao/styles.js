import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  gap: 12px;
`;

export const Main = styled.main`
padding: 5% 10%;
display: flex;
flex-direction: column;
gap: 8px;
`;

export const Section = styled.section`
display: flex;
flex-direction: column;
gap: 12px;
`;

export const Article = styled.article`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const Titulo = styled.strong`
color: #F4EDE8;
font-size: 30px;

@media (max-width: 768px) {
  font-size: 20px;
}
`;

export const SubTitulo = styled.p`
color: #ff9900;
font-size: 16px;
font-weight: 200;

@media (max-width: 768px) {
  font-size: 12px;
}
`;

export const AreaInput = styled.div`
display: flex;
`;

export const Input = styled.input`
width: 100%;
height: 50px;
border-radius: 8px 0px 0px 8px;
background: #232129;
padding: 10px;
color: #fff;
outline: none;

:placeholder{
  color: #999591
}

:focus{
  border-color: #ff9900;
}
`;

export const BotaoSearch = styled.button`
width: 50px;
height: 50px;
border-radius: 0px 8px 8px 0px;
border: none;
background: #ff9900;
display: flex;
align-items: center;
justify-content: center;

:focus{
  background: #ff8000;
}
`;

export const Card = styled.div`
background: #3E3B47;
border-radius: 8px;
padding: 10px;
height: 100px;
align-items: center;
box-shadow: 1px 1px 3px #302C3D;
display: flex;
border-color: #ff9900;
border-top-style: solid;
border-top-width: thin;
justify-content: center;
flex-direction: column;
`;

export const BotaoLimpar = styled.button`
height: 50px;
border: 0;
border-radius: 8px;
background: #ff9900;
width: 100%;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;

:focus{
  background: #ff8000;
}
`;

export const Separator = styled.hr`
border-color: #cccc;
`;

export const InfoCard = styled.strong`
color: #F4EDE8;
font-size: 120px;
font-weight: 600;

@media (max-width: 768px) {
  font-size: 30px;
}
`;


