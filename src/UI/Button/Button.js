import React from 'react';
import './Button.css'
import exit from '../../Assets/exit.svg';

const Button = (props) => {
    return(
        <>
            <div>
                <button className='button' >
                <a href={props.link} target='_blank'>
                    <div className='button-name'>
                        {props.name}
                    </div>
                    <div className='exit-image'>
                        <img src={exit}  alt= 'exit'/>
                    </div>
                </a>
                </button>
                    
            </div>
        </>
    );
}

export default Button;