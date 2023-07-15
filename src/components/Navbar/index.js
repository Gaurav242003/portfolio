import React, { useEffect, useState } from 'react';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcons, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './NavbarElements';


import { FaBars } from 'react-icons/fa';
function Navbar({toggle}) {
   const [scrollNav,setScrollNav]=useState(false);

   const chagneNav=() =>{
      if(window.scrollY>=80){
        setScrollNav(true);
      }else{
        setScrollNav(false);
      }
   };

   useEffect(()=>{
         window.addEventListener('scroll',chagneNav);
   },[]);

    return (
        <>
            <Nav  scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='home'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact='true'
                    offset={-80}>gaurav</NavLogo>
                    <MobileIcons  onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                             <NavLinks to='contact'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}>Contact Me</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="https://gray-calley-89.tiiny.site" target='_blank' >Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
