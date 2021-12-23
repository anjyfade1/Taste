import React from "react";
import './Hero.css';
import Button from "../../UI/Button/Button";
import HeroImage from '../../Assets/Hero-Image.png';


const Hero = () => {
    return(
        <div className = 'hero'>
            <div className='hero-details'>
                <h1 className='topic'>
                <span className='topic-span'>Tired & hungry?</span><br/>Order food and get it instantly.
                </h1>
                <p>
                Dear Student,<br/>
                The responsibilities of being a university student is overwhelming enough. Proper feeding needn’t be a problem as well. 
                </p>
                <div className='hero-button'>
                   
                    <Button name='JOIN THE CLAN' link='https://forms.gle/2r41PbJTgpAHLYrUA'/>
                   
                </div>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt = 'heroimage'/>
            </div>
        </div>
    );
}


export default Hero;