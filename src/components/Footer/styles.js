import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #28262E;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    postition: fixed;
    height: 100px;
  }
`

export const Nav = styled.nav`
  display: flex;
  padding-top: 10px;
  gap: 2rem;
`

export const Option = styled.a`
  border: 0;
  transition: ease-in 0.2s;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.1);
    background-color: #ff9900
  }
`

export const Texto = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #ff9900;
  margin-left: 50px;
  display: inline-block;
  position: relative;

`

export const Titulo = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  color: #F4EDE8;
`

export const Article = styled.section`
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
