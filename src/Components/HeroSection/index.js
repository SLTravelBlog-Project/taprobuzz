import React, {useState} from 'react';
import Videos from '../../Videos/homeVideo.mp4';
import Footer from "../Footer/Footer";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

} from './HeroElements';

import './index.css'
import {Button} from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }

    return (
        <HeroContainer className='hero'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Videos} type='video/mp4'/>
            </HeroBg>
            <HeroContent className='hero-content'>
                <HeroH1>
                    TAPROBUZZ<br></br>
                </HeroH1>
                <HeroP>
                The Online Travel Guid of Sri Lanka
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="Articles" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            <Footer/>
        </HeroContainer>
        
    )
}

export default HeroSection;
