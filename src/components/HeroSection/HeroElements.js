import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-scroll";

export const HeroContainer=styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding: 0 ;
  flex-wrap: wrap;
  height: 700px;
  position: relative;
  z-index: 1;

  :before {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: 
     linear-gradient(
       180deg,
       rgba(0,0,0,0.2) 0% ,
       rgba(0,0,0,0.6) 100%
     ),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      z-index: 2;
     
  }


`;

export const HeroBg=styled.div`
 position: absolute;
 top:0;
 right:0;
 bottom:0;
 width:100%;
 height: 100%;
 overflow:hidden;

`;
export const VideoBg=styled.video`
 width:100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 background: #232134;

`;

export const HeroContent =styled.div`
  z-index: 3;
  color: #fff;
  width: 95%;
  position: absolute;
  padding: 8px 24px;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width:1200px) {
     justify-content: center;
     
  }

`;




export const HeroP =styled.p`
   margin-top: 24px;
   color:#fff;
   font-size: 24px;
   text-align: left;
   max-width: 600px;
  

   @media screen and (max-width:768px){
    font-size: 22px;
   }

   @media screen and (max-width:480px){
    font-size:18px;
   }
   
`;
export const HeroBtnWrapper =styled.div`
   margin-top: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const HeroH1 =styled.h1`
   color: #fff;
   font-size: 48px;
   text-align: left;

   @media screen and (max-width:768px){
    font-size: 40px;
    text-align: center;
   }

   @media screen and (max-width:480px){
    font-size:32px;
    
   }


`;

export const ArrowForward= styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;

`;

export const ArrowRight= styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`;


export const Button=styled(Link)`
  border-radius: 50px;
  text-decoration: none;
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
`;