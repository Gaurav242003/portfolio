import styled,{keyframes} from "styled-components";

const bounce=keyframes`
    0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-30px);
		-ms-transform:     translateY(-30px);
		transform:         translateY(-30px)
	}
	60% {
		-webkit-transform: translateY(-15px);
		-ms-transform:     translateY(-15px);
		transform:         translateY(-15px)
	}
`;

export const IconWrap=styled.div`
   margin: 20px 20px 0 0;
   display: flex;
   align-items: center;
   flex-direction: column;
   text-align: center;
   justify-content: center;

  

      
   
`

export const Img=styled.img`
  border-radius: 50%;
  margin-bottom: 5px;
  border: 1px solid;
  object-fit: contain;
  height: 100px;
  width: 100px;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  
  &:hover{
    cursor: pointer;
      animation-name: ${bounce} ;
      -moz-animation-name: ${bounce};
  }
   



  @media screen and (max-width:768px){
    height: 60px;
  width: 60px;
  }

  @media screen and (max-width:480px){
    height: 50px;
  width: 50px;
  }
 


`;