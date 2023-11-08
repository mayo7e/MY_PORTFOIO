

import React from 'react'

import {LeftSection} from "./HeroStyles"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'

const Hero = () => {
  return (
    <Section>
        <LeftSection>
            <SectionTitle main >
                  Learn about me
            </SectionTitle>
            <SectionText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptate, dolorum. Enim placeat magni quam deserunt alias itaque hic architecto molestias.
            </SectionText>

        </LeftSection>

    </Section>
  )
}

export default Hero
