

import React from 'react'
import {Boxes, Box, BoxNum, BoxText} from "./Acomplishment";
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { data } from '../../constants/constants';

const Accomplishmrnt = () => {
  return (
   <Section>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
        {data.map(({number, text, index})=>(
          <Box>
            <BoxNum>{number}+</BoxNum>
            <BoxText>{text}</BoxText>
          </Box>
        ))}
    </Boxes>
   </Section>
  )
}

export default Accomplishmrnt
