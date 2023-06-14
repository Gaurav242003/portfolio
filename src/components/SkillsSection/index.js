import React from 'react'

import Icons from '../icons';
import skillpic from '../../images/sk.png';

import { SkillsWrapper,Techstack,Code,Allwrap,TopLine,Img2, ImgWrap } from './SkillsElements'

const Skills = ({img,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14}) => {
  return (
    <SkillsWrapper  id='skills'>
     
       <Allwrap>
          <TopLine>
                |SKILLS
             </TopLine>
             <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
             <Techstack>
           <Icons source={img}  name='HTML'/>
           <Icons source={img3} name='CSS' />
           <Icons source={img4}  name='JAVASCRIPT'/>
           <Icons source={img2} name='REACT'/>
           <Icons source={img5} name='BOOTSTRAP'/>
           <Icons source={img6} name='TAILWIND'/>
           <Icons source={img7} name='<STYLED />'/>
           <Icons source={img8} name='NODE.JS'/>
           <Icons source={img9} name='MONGODB'/>
           <Icons source={img10} name='EXPRESS.JS'/>
           <Icons source={img11} name='EJS'/>
           <Icons source={img12} name='C++'/>
           <Icons source={img13} name='GITHUB'/>
           <Icons source={img14} name='FIGMA'/>

           
          
             
        
     </Techstack>
     <Code>
        <ImgWrap>
        <Img2 src={skillpic} />
        </ImgWrap>
         
     </Code>
             </div>  
      
       </Allwrap>
       
    </SkillsWrapper>
  )
}

export default Skills