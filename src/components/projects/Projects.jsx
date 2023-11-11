

import React from 'react'
import {Section, SectionTitle, SectionDivider} from "../../styles/GlobalComponents/index"
import {GridContainer, BlogCard, CardTitle, CardInfo, Hr, TitleContent, TagList, Tag, UtilityList, ExternalLinks} from "./ProjectsStyles"
import { projects } from '../../constants/constants'

const Projects = () => {
  return (
    <Section  id = "projects">
      <SectionDivider divider />
      <SectionTitle>My Projects</SectionTitle>
      <GridContainer>
          {projects.map(({title, description, image, tags, id, source, visit}) => (
            <BlogCard key={id} > 
              <img style={{width:"100%"}} src= {image} alt="" />
              <TitleContent>
                  <CardTitle> {title}</CardTitle>
                    <Hr />
              </TitleContent>
            
              <CardInfo> {description} </CardInfo>

              <div>
                <TagList>
                  {tags.map((tag, id)=>(
                    <Tag key={id} >{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))}
      </GridContainer> 
    </Section>
  )
}

export default Projects
