import React from 'react';
import './Landing.css'
import Navbar from '../../Component/Navbar/Navbar';
import Hero from '../../Component/Hero/Hero';
import Vendor from '../../Component/Vendor-page/vendor';
import Rider from '../../Component/Rider/Rider';
import Works from '../../Component/Works/Works';
import Why from '../../Component/Why/why';
import Contact from '../../Component/Contact/contact';
import Footer from '../../Component/Footer/footer';

const Landing = () => {
    return(
        <div className='landing'>
            <Navbar/>
            <Hero/>
            <Vendor/>
            <Rider/>
            <Works/>
            <Why/>
            <Contact/>
            <Footer/>
        </div>
    );
}  

export default Landing;