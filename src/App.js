import React from 'react';
import './App.css';
//import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
// import Articals from './pages/articals';
// import Things from './pages/things';
// import Hotels  from './pages/hotels';
// import Gallery from './pages/gallery';
// import AboutUs from './pages/aboutUs';
// import ContactUs from './pages/contactUs';
//import Sidebar from './Components/sidebar';


// import Footer from './Components/Footer/Footer';

function App() {
return (
	<Router>
		<Home/>
		{/* <Sidebar/>
	    <Navbar /> */}
	{/* <Routes>
		<Route path='/' exact component={Home} />
		<Route path='/articals' component={Articals} />
		<Route path='/things' component={Things} />
		<Route path='/hotels' component={Hotels } />
		<Route path='/gallery' component={Gallery} />
		<Route path='/aboutUs' component={AboutUs} />
		<Route path='/contactUs' component={ContactUs} />
	</Routes> */}
	{/* <Footer /> */}
	</Router>
	
);


}


export default App;
