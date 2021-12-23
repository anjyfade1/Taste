import React from "react";
import './Rider.css';
import Button from "../../UI/Button/Button";
import RiderImage from '../../Assets/Rider-Image.png';


const Rider = () => {
    return(
        <div className = 'Rider'>
            <div className='Rider-details'>
                <h1 className='topic'>
                <span className='topic-span'>Gain more delivering.</span>
                </h1>
                <p>
                Looking for a new way to have a direct link with customers regularly? Here is a perfect way to make good use of your transport services.                </p>
                <div className='Rider-button'>
                  
                    <Button name='BECOME A DELIVERING AGENT' link ='https://forms.gle/WuXrcHLy6huZYQiD8' />
      
                </div>
            </div>
            <div className='Rider-image'>
                <img src={RiderImage} alt = 'riderimage'/>
            </div>
        </div>
    );
}


export default Rider;