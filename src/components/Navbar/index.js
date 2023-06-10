import React from 'react';
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
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>dolla</NavLogo>
                    <MobileIcons  onClick={toggle}>
                        <FaBars />
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin" >Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar