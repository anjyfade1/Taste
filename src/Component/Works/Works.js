import React from "react";
import './Works.css';
import Search from '../../Assets/search.svg';
import Cart from '../../Assets/cart.svg';
import Deliver from '../../Assets/deliver.svg';

const Works = () =>{
    return(
        <div className='works' id='works'>
            <div className='works-title'>
                <h1>How IT WORKS</h1>
                <div class="box"></div>
            </div>
            <div className='works-content'>
                <div className='works-content-1'>
                    <div className='img'>
                        <img src= {Search} alt='search'/>
                    </div>
                    <div className='sear'>

                    <h2>Search </h2>
                    <p>Choose any food of your choice from our vast variety of food vendors.</p>
                    </div>
                </div>
                <div className='works-content-2'>
                    <div className='img'>
                        <img src= {Cart} alt='cart'/>
                    </div>
                    <h2>Order & <br/> Check-out</h2>
                    <p>Finish up the process with payments and relax as you await your meal  </p>
                </div>
                <div className='works-content-3'>
                    <div className='img'>
                        <img src= {Deliver} alt='deliver'/>
                    </div>
                    <h2>Deliver &<br/> Enjoy</h2>
                    <p>Settle down to eat when it arrives and relish every moment. </p>
                </div>
            </div>
        </div>
    );
}

export default Works