import React from "react";
import './vendor.css';
import Button from "../../UI/Button/Button";
import VendorImage from '../../Assets/Vendor-Image.svg';


const Vendor = () => {
    return(
        <div className = 'vendor'>
            <div className='vendor-image'>
                <img src={VendorImage} alt = 'vendorimage'/>
            </div>
            
            <div className='vendor-details'>
                <h1 className='topic'>
                <span className='topic-span'>Are you a food</span><br/>entreprenuer.
                </h1>
                <p>
                Thinking of how to reach many stomachs and manage your business effectively?
                </p>
                <p>
                Don’t let the hassle of running a business suck the life out of you.
                </p>
                <div className='vendor-button'>
                    <Button name='JOIN THE CLAN'/>
                </div>
            </div>
        </div>
    );
}


export default Vendor;