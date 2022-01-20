import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

import './index.css'

const Navbar = ({toggle}) => {
    return (
        <>
         <Nav>
            <NavbarContainer className='my-navbar'>
                <NavLogo to='/'>Taprobuzz</NavLogo>
                <MobileIcon  onClick={toggle}>
                    <FaBars/>
                </MobileIcon>

            
             <NavMenu>
                <NavItem>
                 <NavLinks to="/articals" >Articles</NavLinks>
                </NavItem>
                <NavItem>
                 <NavLinks to="/things" >Things To Do In Sri Lanka</NavLinks>
                </NavItem>
                <NavItem>
                 <NavLinks to="/hotels" >Resorts</NavLinks>
                </NavItem>
                <NavItem>
                 <NavLinks to="/gallery" >Gallery</NavLinks>
                </NavItem>
                <NavItem>
                 <NavLinks to="/about" >About Us</NavLinks>
                </NavItem>
                <NavItem>
                 <NavLinks to="/Contact" >Contact Us</NavLinks>
                </NavItem> 
              </NavMenu>
              </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar;

