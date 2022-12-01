import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #28262E;
  padding: 0 2rem;
  flex-wrap: wrap;
  width: 100vw;
`
export const Logo = styled.img`
  padding: 1rem 0;
  color: #ff9900;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: 700;
  font-size: 1.7rem;
`
export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
    
  }
`

export const MenuLink = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.7;

  :hover {
    color: #ff9900;
    opacity: 1;
  }

  @media (max-width: 768px) {
    :last-child{
      display: flex;
    }
  }
`

export const MenuContato = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: 600;
  display: none;
  opacity: 0.7;

  :hover {
    display: inline;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Botao = styled.a`
  border: none;
  background-color: #FF9900;
  border-radius: 8px;
  padding: 8px;
  color: #F4EDE8;
  font-weight: 600;
  height: 40px;
  display:flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Texto = styled.h1`
color: #F4EDE8;
font-size: 14px;
font-weight: 600;

:hover {
    color: #ff9900;
  }
`;
