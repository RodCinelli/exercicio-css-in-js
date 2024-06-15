import React from 'react'
import { HeroForm, HeroTitle } from './styles' // Importe os componentes estilizados de styles.ts

const Hero = () => (
  <HeroForm>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </HeroForm>
)

export default Hero
