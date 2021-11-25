import React from "react";
import './contact.css';
import food from '../../Assets/food.svg';
import ContactForm from "./contact-form/contact-form";

const Contact = () => {
    return(
        <div className ='contact' id='contact'>
            <div className='contact-title'>
                <h1>contact</h1>
                <div class="box"></div>
            </div>
            <div className='contact-details'>
                <div className='contact-left'> 
                    <h1>Fill the Form.<br/>It’s Easy!</h1>
                    <p>
                        We would love to reach out to you.
                    </p>
                    <div className='food'>
                        <img src={food} alt='food' />
                    </div>
                </div>
                <div className='contact-right'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contact 