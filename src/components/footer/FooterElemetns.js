import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footercontainer=styled.div`
  background:#010606;
  color:#fff;
  display: flex;
 height: fit-content;
justify-content: center;
align-items: center;



`

export const Wrap=styled.div`
 margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: max-content;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 10px;
`
export const IMG=styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 object-fit: contain;
`

export const Button=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
 height: 40px;
 border-radius: 50%;
 margin :5px  10px 10px;
 color: #010606 ;

 cursor: pointer;

`
export const Message=styled.div`
 
  white-space: nowrap;
 
`
export const Social=styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;

 @media screen and (max-width: 480px){
    margin-top: 10px;
 }

`