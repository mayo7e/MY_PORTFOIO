

import React, {useRef, useState} from 'react'
import { Section, SectionTitle, SectionText, SectionDivider } from '../../styles/GlobalComponents'

import { TimeLineData } from '../../constants/constants'

import {CarouselItem, CarouselTitle, CarouselText, CarouselContainer, CarouselMobileScrollNode} from "./TimelineStyles"

const Timeline = () => {
const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  //     const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }


  //  const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }


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
                {TimeLineData.map(({year, text, index})=> (
                  <CarouselMobileScrollNode final >
                    <CarouselItem
                    index={index}
                    key={`carousel_item-${index}`}
                    active={activeItem}
                    // onClick={(e)=> handleClick(e, index)}
                    >
                          <CarouselTitle>{year}</CarouselTitle>
                          <CarouselText>{text}</CarouselText>
                     </CarouselItem>
          
                  </CarouselMobileScrollNode>
                    ))}
            </CarouselContainer>
        </div>
      </Section>

  )
}

export default Timeline
