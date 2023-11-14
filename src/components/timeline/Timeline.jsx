

import React, {useRef} from 'react'
import { Section, SectionTitle, SectionText, SectionDivider } from '../../styles/GlobalComponents'

import { TimeLineData } from '../../constants/constants'

import {CarouselItem, CarouselTitle, CarouselText, CarouselContainer} from "./TimelineStyles"

const Timeline = () => {
  return (
      <Section>
        <SectionDivider />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolorem aliquid debitis sit suscipit magnam rerum doloribus et, culpa excepturi qui.
        </SectionText>
        <div>
          <CarouselContainer>
                {TimeLineData.map(({year, text, id})=> (
                    <CarouselItem>
                          <CarouselTitle>{year}</CarouselTitle>
                          <CarouselText>{text}</CarouselText>
                  </CarouselItem>
          
                    ))}
            </CarouselContainer>
        </div>
      </Section>

  )
}

export default Timeline
