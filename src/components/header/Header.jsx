

import React from 'react'
import { RiTwitterXFill, RiGithubFill,  RiLinkedinBoxFill   } from "react-icons/ri";
import {DiCssdeck } from "react-icons/di";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { LanguageTabMenu } from '../switchLanguage/switchLanguage';

import{ 
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  List
} from "./HeaderStyles"



const navigation = ["Projects", "Technoogies", "About"]
const navIcons = [<RiGithubFill />,  <RiLinkedinBoxFill />, <RiTwitterXFill />  ]

const Header = () => {
  const { t, i18n } = useTranslation()
  return (
    
    <Container>
        <Div1>
          {/* <Link to="/"> */}
            <a href="/" style={{display: "flex", alignItems: "center"}}>
              <DiCssdeck size = "3rem"  />
              <span style={{fontSize:"2.5rem"}}>
                     {t("Portfolio")}
                </span>
            </a>
          {/* </Link> */}
        </Div1>

        <Div2>
      
              {navigation.map((item)=> <NavLink>{t(`${item}`)}</NavLink>)}
                  
        </Div2>
        <Div3>
          {navIcons.map((item)=> <List>{item}</List> )}
        
        <LanguageTabMenu />
        </Div3>
        
        {/* <select onChange={(e) => {
          <switchLanguages newLanguage={e.targget.value} />
          // switchLanguages(e.target.value)
          }}>
            <option value="en">English</option>
              <option value="de">German</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
        </select>
               */}
    

    </Container>
  )
}

export default Header
