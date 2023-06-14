import React from 'react';
import { Button } from '../ButtonElement';
import {InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,SubTitle,BtnWrap,Column2,Img,ImgWrap} from './infoElements';

const InfoSection = ({id,lightBg,imgStart,topLine,lightText,headline,darkText,description,buttonLabel1,buttonLabel2,img,alt,primary,dark,src1,show,src2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow  imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading  lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText} >{description}</SubTitle>
                <div  style={{display:'flex'}}>
                <BtnWrap>
                  <Button to={src1} 
                   target='_blank'

                  primary={primary ? 1 : 0} 
                  dark={dark? 1 : 0}
                  
                  >{buttonLabel1}</Button>
                </BtnWrap>

                { show && <BtnWrap  style={{marginLeft:'20px'}}>
                  <Button
                   to={src2} 
                   target='_blank'

                  primary={primary ? 1 : 0} 
                  dark={dark? 1 : 0}>{buttonLabel2}</Button>
                </BtnWrap>}
                
                </div>
                
              </TextWrapper>

            </Column1>
            <Column2>
              <ImgWrap>
                <Img  src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection