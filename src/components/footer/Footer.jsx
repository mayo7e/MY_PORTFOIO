


import React from 'react'
import { RiTwitterXFill, RiGithubFill,  RiLinkedinBoxFill   } from "react-icons/ri";
import {
  Linklist, 
  FooterWrapper, 
  LinkColumn,
   LinkItem, 
   LinkTitle, 
   SocialIconRow, 
   SocialIconList, 
   SocialsContainer,
  CompanyContainer,
  Slogan } from "./FooterStyles"


const socialIcons = [<RiGithubFill />,  <RiLinkedinBoxFill />, <RiTwitterXFill />  ]

const Footer = () => {
  return (
    <FooterWrapper>

          <Linklist>
              <LinkColumn>
                  < LinkTitle>Call</LinkTitle>
                  < LinkItem href="tel:+2349033636664">+2349033636664</LinkItem>
              </LinkColumn>
              <LinkColumn>
                  < LinkTitle>Email</LinkTitle>
                  < LinkItem href="mailto:mayowa.wh@gmail.com">mayowa.wh@gmail.com</LinkItem>
              </LinkColumn>
          
          </Linklist>
          <SocialsContainer>
             
              <CompanyContainer>
                  <Slogan>
                    Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Facere, accusamus.
                  </Slogan>
              </CompanyContainer>

              <SocialIconRow>
                {socialIcons.map((item)=> < SocialIconList>{item}</ SocialIconList> )}
              </SocialIconRow>

          </SocialsContainer>
    </FooterWrapper>
  )
}

export default Footer
