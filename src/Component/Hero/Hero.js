import React from "react";
import './Hero.css';
import Button from "../../UI/Button/Button";
import HeroImage from '../../Assets/Hero-Image.svg';


const Hero = () => {
    return(
        <div className = 'hero'>
            <div className='hero-details'>
                <h1 className='topic'>
                <span className='topic-span'>Tired & hungry?</span><br/>Order food and get it instantly.
                </h1>
                <p>
                The responsibilities of being a university student is overwhelming enough. Proper feeding needn’t be a problem as well. 
                </p>
                <div className='hero-button'>
                    <a href='https://forms.gle/2r41PbJTgpAHLYrUA'>
                    <Button name='JOIN THE CLAN'/>
                    </a>
                </div>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt = 'heroimage'/>
            </div>
        </div>
    );
}


export default Hero;