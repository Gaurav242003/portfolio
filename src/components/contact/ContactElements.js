import styled from "styled-components";


export const ContactWrapper=styled.div`
  background: #fff;
  
  overflow: hidden;
 
  
`

export const All=styled.div`
 display: flex;

  justify-content: center;
  align-items: center;
   z-index: 1;
   height: 750px;
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
   flex-wrap: wrap ;
`
export const ImgWrap=styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  width: 50%;
  /* background: orange; */

  @media screen and (max-width:800px){
     display: none;
  }
`

export const Holderform=styled.div`
 
width: 50%;
min-width: 350px;
height: fit-content;
color: black;
border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  @media screen and (max-width:800px){
     width:100%;
  }
  
  /* background: black; */
`
export const Head =styled.div`
   color: #03fcd3;
   display: block;
text-align: center;
  margin-top: 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px){
     padding-top: 80px;
     margin-bottom: 0px;
  }
`;

export const Input=styled.input.attrs({
  type: 'text',
  
})`
   width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`

export const Textarea=styled.textarea`
 width: 100%;
 resize: vertical;
 border-radius: 4px;
 margin-top: 6px;
 margin-bottom: 16px;
 border: 1px solid #ccc;
  
`

export const Button=styled.button`
border-radius: 50px;
  background: ${({primary})=>(
    primary ? "#03fcd3" : '#010606'
  )};

  white-space: nowrap;
  padding: ${({big})=>(
    big? '14px 48px' : '12px 30px'
  )};

  color : ${({dark})=>(
    dark? '#010606' : '#fff'
  )};
  
  font-size: ${({fontBig})=>(
     fontBig? '20px' : '16px'
  )};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2 ease-in-out;
    background: ${({primary})=>(
    primary ? "#fff" : '#03fcd3'
  )};
   color: black;
   
  }

 
`