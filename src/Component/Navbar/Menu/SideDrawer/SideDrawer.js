import React from 'react';
import  './SideDrawer.css';
import NavLink from '../../NavLink/NavLink';
import Backdrop from '../../../../UI/Backdrop/backdrop';

const sideDrawer = (props) =>{
    let attachedClasses = ['sideDrawer', 'close'];
    if (props.opened) {
        attachedClasses = ['sideDrawer', 'open']
    }
    return (
        <div>
        <Backdrop show = {props.opened}  clicked = {props.close} />
        <div className = {attachedClasses.join(' ')} >
            <NavLink />
        </div>
        </div>
    );
}

export default sideDrawer;