

import React from 'react'
import {Section, SectionTitle, SectionDivider} from "../../styles/GlobalComponents/index"
import {GridContainer, BlogCard, CardTitle, CardInfo, Hr, TitleContent} from "./ProjectsStyles"
import { projects } from '../../constants/constants'

const Projects = () => {
  return (
    <Section  id = "projects">
      <SectionDivider divider />
      <SectionTitle>My Projects</SectionTitle>
      <GridContainer>
          {projects.map(({title, description, image, tags, id, source, visit}) => (
            <BlogCard> 
              <img style={{width:"100%"}} src= {image} alt="" />
              <TitleContent>
                  <CardTitle>
                        {title}
                  </CardTitle>
                    <Hr />
              </TitleContent>
                <CardInfo>
                    {description}
                </CardInfo>
            </BlogCard>
          ))}
      </GridContainer> 
    </Section>
  )
}

export default Projects
