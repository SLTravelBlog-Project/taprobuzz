import React, {useState} from 'react'
import Navbar from '../Components/NavBar';
import Sidebar from '../Components/sidebar';
import HeroSection from '../Components/HeroSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}



    return (
        <>    
            <Sidebar isOpen={isOpen} toggle={toggle}/>
	        <Navbar toggle={toggle} />
            <HeroSection/>
            
        </>
    )
}

export default Home;
