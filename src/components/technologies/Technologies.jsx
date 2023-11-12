

import React from 'react'

import {Section, SectionTitle, SectionDivider, SectionText} from "../../styles/GlobalComponents/index"
import {List,  ListItem, ListContainer, ListTitle, ListParagraph} from "./TechnologiesStyles"
import { RiReactjsFill } from 'react-icons/ri'
import { SiPytorch} from 'react-icons/si'
import { TbBrandNextjs} from 'react-icons/tb'


// Refactor Technloogy section

const Technologies = () => {
  return ( 
    <Section id="tech" >
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Beatae assumenda quibusdam eaque, molestiae aperiam consequatur tempore! Earum vel consectetur cupiditate?
      </SectionText>
     
        <List>
            <ListItem>
              <RiReactjsFill size="3rem" />
              <ListContainer >
                 <ListTitle>Front-end</ListTitle>
                  <ListParagraph>Experience with <br />
                  React-js, React-Native and Figma</ListParagraph>
              </ListContainer>
            </ListItem>
            <ListItem>
              <SiPytorch size="3rem" />
              <ListContainer >
                 <ListTitle>Machine Learning</ListTitle>
                  <ListParagraph>Experience with <br />
                  Python, Pytorch, TensorFlow and  Rust</ListParagraph>
              </ListContainer>
            </ListItem>
            <ListItem>
              <TbBrandNextjs size="3rem" />
              <ListContainer >
                 <ListTitle>Backend</ListTitle>
                  <ListParagraph>Experience with <br />
                  Nodejs, Nextjs, RestAPI, GraphQL and Mongodb</ListParagraph>
              </ListContainer>
            </ListItem>
        </List>
     
    </Section>
  )
}

export default Technologies
