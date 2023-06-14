import React from 'react'

import { IconWrap,Img } from './IconsElemensts'

const Icons = ({source,name}) => {
  return (
    <IconWrap >
    <Img  src={source} />
      <p  style={{fontWeight:'700',display:'flex',flexWrap:'wrap'}}>{name}</p>
    </IconWrap>
  )
}

export default Icons;