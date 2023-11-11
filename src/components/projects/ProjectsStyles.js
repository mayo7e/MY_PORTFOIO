import styled from "styled-components";


export const GridContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(400px, 1fr));
        /* place-items: center; */
        gap: 3rem;
        /* max-width: 400px; */
    
        /* height: 400px; */
        
`

export const BlogCard = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        width: 400px;
        text-align: center;
         
`
export const CardInfo = styled.h3`
        width: 100%;
        padding: 0 50px;
        color: #e4e6e7;
        /* font-style: 2rem; */
        line-height: 24px;
        /* text-align: justify; */
        
         
`
export const CardTitle = styled.h3`
        font-weight: 500;
        letter-spacing: 2px;
        color: #9cc9e3;
        padding: .5rem 0;
        font-size: ${(props) => props.title ? '3rem' : '2rem'};
         
`

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;

`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  background: #d0bb57;
`

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
/* display: flex;
align-items:center; */
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;