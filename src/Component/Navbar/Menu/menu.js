import React from 'react';
import  './menu.css';
import SideDrawer from '../Menu/SideDrawer/SideDrawer';

const menu = (props) =>{
    return (
        <div className = "menu">
            < SideDrawer opened = {props.open} close = {props.closed} />
        </div>
    );
}

export default menu;