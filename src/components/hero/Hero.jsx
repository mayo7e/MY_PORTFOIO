

import React from 'react'

import {LeftSection} from "./HeroStyles"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import  Button from "../../styles/GlobalComponents/Button"

const Hero = () => {
  return (
    <Section>
        <LeftSection>
            <SectionTitle main >
                  Learn about moi
            </SectionTitle>
            <SectionText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptate, dolorum. Enim placeat magni quam deserunt alias itaque hic architecto molestias.
            </SectionText>

        </LeftSection>
            <Button alt> Join me </Button>

    </Section>
  )
}

export default Hero
