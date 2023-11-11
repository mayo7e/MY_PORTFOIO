import styled from "styled-components"


export const Container = styled.div`
     display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows:  1fr;
        grid-column-gap: 2rem;
        padding: 1rem;
        padding-top: 2rem;
        /* border: 2px solid tomato; */
        
        @media ${(props) => props.theme.breakpoints.sm} {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, 60px);
          grid-column-gap: 0.5rem;
          grid-row-gap: 0.5rem;
  }
`

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    
    @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
  `
  export const Div2 = styled.div`
      grid-area: 1 / 2 / 2 / 4;
      /* border: 2px solid tomato; */
      grid-column-gap: 2rem;
      display: flex;

      justify-content:end;
      align-items:center;
      gap: 32px;
            
      `

export const NavLink = styled.a`

      font-size: 2rem;  
      line-height: 32px;
      color: rgba(255, 255, 255, 0.75);
      transition: 0.4s ease;
      &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
  }
     
`
export const Div3 = styled.div`
    background: #0F1624;
    grid-area: 1 / 5 / 2 / 6;
    /* border: 2px solid Orange; */
    display: flex;
    font-size: 24px;
    justify-content:end;
    align-items:center;
    gap: 16px;
    `

export const List = styled.i`
     transition: 0.4s ease;
      &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
`

