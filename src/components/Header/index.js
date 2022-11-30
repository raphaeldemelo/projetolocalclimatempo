import React, { useState } from 'react'
import {
  Container,
  Logo,
  Hamburguer,
  Menu,
  MenuLink,
  Botao,
  Texto,
} from './styles'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Logo src={logo} />

      <Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <BiMenuAltRight size={30} color='#ff9900' />
      </Hamburguer>

      <Menu isOpen={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)}>
          <Link to='/'><Texto>Buscar Cep</Texto></Link>
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)}>
          <Link to='/FusoHorario'><Texto>Fuso Horário</Texto></Link>
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} >
          <Link to='/Previsao'><Texto>Previsão do Tempo</Texto></Link>
        </MenuLink>
        <MenuLink onClick={() => setIsOpen(!isOpen)} >
          <Link to='/Contato'><Texto>Contato</Texto></Link>
        </MenuLink>
      </Menu>

      <Botao href='#contato'>Contato</Botao>
    </Container>
  )
}
