import React from 'react'

import DevArticle from '../../components/DevArticle'
import Widgets from '../../components/Widgets'

import { Container, GooglePanel } from './styles'

function Home() {
  return (
    <Container>
      <section id="news">
        <Widgets time="22:45" date="Manaus, 6 de agosto" temperature="32" weather="cloudy" />

        <div>
          News
          <DevArticle title="React Typescript - How to set types on hooks (+cheat sheet)" author="ibrahma Ndaw"/>
          <DevArticle title="Author React Component's, like a boss." author="Zoedreams"/>
          <DevArticle title="A Complete Beginner's Guide to React" author="Ali Spittel"/>
          <DevArticle title="35+ Free React templates and themes" author="Davide Pacilio"/>
        </div>
      </section>

      <GooglePanel id="google-panel">
        Google
        <input type="text" placeholder="Pesquise no Google ou digite uma URL" />
      </GooglePanel>

    </Container>
  )
}

export default Home