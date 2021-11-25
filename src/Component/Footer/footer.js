import React from "react";
import './footer.css';
import Logo from "../../UI/Logo/Logo";
import foodie from '../../Assets/foodie.svg';
import {IoIosMail} from 'react-icons/io';
import {FiInstagram} from 'react-icons/fi';
import {FiTwitter} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className = 'footer'>

            <div className='footer-details'>
                <a href='/'>
                <div className ='foot-logo'>
                    <Logo/>
                </div>
                </a>

                <h1 className='foot-topic'>
                    Stay connected with us
                </h1>

                <div className='taste-links'>
                    <span className = 'mail'><IoIosMail/></span>
                    <span className='insta'><FiInstagram/></span>
                    <span className ='twit'> <FiTwitter/></span>
                    <span className='face'><FaFacebookF/> </span>
                </div>
            </div>

            <div className='foot-quick'>

                <h1 >Quick links</h1>

                <ul className = 'footlink'>
                    <li>
                        <a href='#works'>How it Works</a>
                    </li>
                    <li>
                        <a href='#why'>Why TasteClan</a>
                    </li>
                    <li>
                        <a href='#contact'>Join Waiting List</a>
                    </li>
                </ul>

                <div className='foot-food'>
                    <img src={foodie} alt='food' />
                </div>

            </div>
        </div>
    );
}


export default Footer;