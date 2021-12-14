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

const Navbar = () => {
    return (
        <>
         <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Taprobuzz</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>

             
             <NavMenu>
                <NavItem>
                 <NavLinks to="/articals" >Articals</NavLinks>
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

