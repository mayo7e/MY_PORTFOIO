import React from "react";
import styled from "styled-components"


export const Section = styled.div`

`
export const SectionTitle = styled.h2`
        font-weight: 800px;
        max-width:100%;
        font-size: ${(props)=> props.main ? "64px": "default"};
        padding: 3.5rem 0 1rem;
        margin-bottom: 1rem;
        
        `
export const SectionText = styled.p`
max-width:600px;
font-weight: 300px;
font-size: 24px;
padding-bottom: 3.5rem;

`