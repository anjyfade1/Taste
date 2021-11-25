import React from "react";
import './Logo.css';
import tasteLogo from '../../Assets/Logo.svg'; 

const Logo = () =>{
    return(
        <div className = 'Logo'> 
            <img src = {tasteLogo} alt ='Logo'/>
        </div>
    );
}

export default Logo;