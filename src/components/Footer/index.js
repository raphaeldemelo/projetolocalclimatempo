import React from 'react'
import { Container, Nav, Option, Texto, Titulo, Article } from './styles'
import { FiInstagram, FiLinkedin, FiFacebook, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <Container>
      <Nav>
        <Option
          target='_blank'
          href='https://www.linkedin.com/in/raphaeldemelo/'
        >
          <FiLinkedin size={30} color='#fff' />
        </Option>

        <Option target='_blank' href='https://www.facebook.com/raphaeldemelos/'>
          <FiFacebook size={30} color='#fff' />
        </Option>

        <Option
          target='_blank'
          href='https://www.instagram.com/raphaeldemelo_/'
        >
          <FiInstagram size={30} color='#fff' />
        </Option>

        <Option target='_blank' href='https://github.com/raphaeldemelo'>
          <FiGithub size={30} color='#fff' />
        </Option>
      </Nav>
      <Article>
        <Texto>
          <Titulo>Criado por</Titulo>@raphaeldemelo
        </Texto>
      </Article>
    </Container>
  )
}
