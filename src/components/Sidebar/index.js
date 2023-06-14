import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,SidebarWrapper,
  SidebarLink,SideabarRoute,SidebarMenu
} from './SideBarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon  onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
            Skills
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
            Contact Me
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideabarRoute to="https://sapphire-jany-42.tiiny.site"  target='_blank' onClick={toggle}>
            Resume
          </SideabarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar