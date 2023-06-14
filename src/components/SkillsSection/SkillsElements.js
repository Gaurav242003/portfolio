import styled from "styled-components";

export const SkillsWrapper=styled.div`
 
 justify-content: center;
 align-items: center;
  background: #fff;
  
`;

export const Techstack=styled.div`
   
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
 
`
export const Code=styled.div`
  
`

export const Allwrap=styled.div`
 
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   z-index: 1;
   
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
  
`;



export const ImgWrap=styled.div`
 max-width: 555px;
 display: flex;
 justify-content: center;
 align-items: center;
 
 height: 100%;
`;

export const Img2=styled.img`
  /* width: 100%; */
  max-width: 350px;
  margin: 0 0 10px 0;
  padding-right: 0;
 
 @media screen  and (max-width:480px){
     display: none;
 }

 
`;

export const TopLine=styled.p`
display: block;
text-align: center;
  margin-top: 20px;
  color: #03fcd3;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;