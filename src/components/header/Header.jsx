

import React from 'react'
import { RiTwitterXFill, RiGithubFill,  RiLinkedinBoxFill   } from "react-icons/ri";
import {DiCssdeck } from "react-icons/di";
import { Link } from "react-router-dom";



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
  return (
    
    <Container>
        <Div1>
          {/* <Link to="/"> */}
            <a href="/" style={{display: "flex", alignItems: "center"}}>
              <DiCssdeck size = "3rem"  />
              <span style={{fontSize:"2.5rem"}} >Portfolio</span>
            </a>
          {/* </Link> */}
        </Div1>

        <Div2>
      
              {navigation.map((item)=> <NavLink>{item}</NavLink>)}
                  
        </Div2>
        <Div3>
          {navIcons.map((item)=> <List>{item}</List> )}

        </Div3>

    </Container>
  )
}

export default Header
