import styled from "styled-components"



export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  `
export const ListItem = styled.ul`
    max-width: 320px;
    display: flex;
    /* text-align:center; */
    flex-direction: column;

  
  `


export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;

  `

export const ListTitle = styled.h4`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-bottom: 8px;

  `
export const ListParagraph = styled.p`
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
  `

export const ListIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 8px;

  `

