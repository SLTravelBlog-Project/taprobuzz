import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink

} 
from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='articals' onClick={toggle} >Articals</SidebarLink>
                    <SidebarLink to='things' onClick={toggle} >Things To Do In Sri Lanka</SidebarLink>
                    <SidebarLink to='hotels' onClick={toggle} >Resorts</SidebarLink>
                    <SidebarLink to='gallery' onClick={toggle} >Gallery</SidebarLink>
                    <SidebarLink to='about' onClick={toggle} >About Us</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle} >Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
