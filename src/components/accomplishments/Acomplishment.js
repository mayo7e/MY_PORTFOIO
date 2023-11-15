import styled from "styled-components";


export const Boxes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 24px 0 40px;
        
`
export const Box = styled.div`
    background: #212D45;
    border-radius: 12px;
    height: 156px;
    padding: 24px;
        
`
export const BoxNum = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 8px;
    
    
    `
export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);

       
`