import React from "react";
import './NavLink.css';


const NavLink = () =>{
    return(
        <div className = 'navlinks'>
            <ul className = 'navlink'>
                <li>
                    <a href='#works'>How it Works</a>
                </li>
                <li>
                    <a href='#why'>Why TasteClan</a>
                </li>
                <li>
                    <a href='#contact'>Join Waiting List</a>
                </li>
                <li className='mob-con'>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>

            
        </div>
    );
}

export default NavLink;