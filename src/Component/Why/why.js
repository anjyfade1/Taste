import React from "react";
import './why.css';
import WhyImage from '../../Assets/logistics.png';


const Why = () => {
    return(
        <div className = 'why' id='why'>

            <div className='why-image'>
                <img src={WhyImage} alt = 'whyimage'/>
            </div>

            <div className='why-details'>
                <h1 className='topic'>
                    <span className='topic-span'>Why Taste Clan?</span>
                </h1>
                <p>
                    At TasteClan, we care about your health, no matter how hectic your lifestyle may be. Though we believe that the youths hold the key to the future, how can we conveniently create new ideas if we don’t take care of ourselves?
                </p>
            </div>
            
        </div>
    );
}


export default Why;