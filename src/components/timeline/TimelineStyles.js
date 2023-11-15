
import styled from "styled-components"


export const CarouselContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;


`
export const CarouselItem = styled.div`
 background: #0F1624;
  border-radius: 3px;
  max-width: 196px;
  

`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`};
  }
`

export const CarouselTitle = styled.h4`
    font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

`
export const CarouselText = styled.p`
      font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

`