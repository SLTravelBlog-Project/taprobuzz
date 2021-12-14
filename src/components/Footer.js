import React from "react";
import { SocialIcon } from 'react-social-icons';
import  "./Footer.css";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";



const Footer = () => {
return (
	<Box>
	<h1 style={{
                color: "black",
                fontFamily:"cursive",
				textAlign: "center",
				marginTop: "-10px" }}>
		Taprobuzz : For Explore Sri Lanka ..

	</h1>
	<Container>
        
		<Row>
		<Column>
			
            <Heading>Services</Heading>
			<FooterLink >Tourism Hotline 
            <p class="number">1912</p></FooterLink>
			<FooterLink >Ambulance Service
            <p class="number">1990</p></FooterLink>
			
		</Column>
		<Column>
			<Heading>Quick Links</Heading>
			<FooterLink href="#">Terms of Use</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Important Noties</FooterLink>
		</Column>

        <Column>
			<Heading>JOIN US</Heading>
			<FooterLink href="#">Tenders</FooterLink>
			<FooterLink href="#">Complaints</FooterLink>
			<FooterLink href="#">Subscribe</FooterLink>
		
			




		</Column>


        <FooterLink >
       <br/>
       <div class="social-media-icons">
           
           <span style={{ marginLeft:"100px",
                          paddingTop: '50px',
                          }}>
							  
           <div>  <SocialIcon url="https://facebook.com" />  </div>
           <div>  <SocialIcon url="https://instagram.com" />  </div>
           <div>  <SocialIcon url="https://twitter.com" />    </div>
           <div>  <SocialIcon url="https://youtube.com" />  </div>
		   
           
           
           </span>
       </div>  
       </FooterLink>
		</Row>


            <div class="linkItem1">
                <p>© 2021 All Rights Reserved by Sri Lanka Taprobuzz Team .</p>
            </div>
            <div class="linkItem2">
                <a>Privacy Policy  ,  </a>
                <a>Terms &amp; Conditions</a>
            </div>
            
            
            
	</Container>
	</Box>
);
};
export default Footer;
