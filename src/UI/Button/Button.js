import React from 'react';
import './Button.css'
import exit from '../../Assets/exit.svg';

const Button = (props) => {
    return(
        <>
            <div>
                <button className='button' >
                    <div className='button-name'>
                        {props.name}
                    </div>
                    <div className='exit-image'>
                        <img src={exit}  alt= 'exit'/>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Button;