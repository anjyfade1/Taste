import React, { Component } from "react";
import './Navbar.css';
import Logo from '../../UI/Logo/Logo';
import NavLink from "./NavLink/NavLink";
import {GiHamburgerMenu} from 'react-icons/gi';
import Menu from "./Menu/menu";

class Navbar extends Component {

    state = {
        showsideDrawer: false
    }

    sideDrawerClosedHandeler = () => {
        this.setState( { showsideDrawer: false } );
    }
   
    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showsideDrawer: !prevState.showsideDrawer };
        } );
        console.log(this.sideDrawerToggleHandler);
    }



    render(){

        return(
                <div className ='navbar'>
                    <a href='/'>
                    <div className = 'nav-logo'>
                        <Logo/>
                    </div>
                    </a>
                    <div className='nav-link'>
                        <NavLink/>
                    </div>
        
                    <div className='nav-button'>
        
                    <a href='#contact'>
                        <button>
                            CONTACT
                        </button>
                    </a>
                    </div>

                    <Menu open = {this.state.showsideDrawer}
                    closed = {this.sideDrawerClosedHandeler}/>
                    <div className='hamburger' onClick = {this.sideDrawerToggleHandler}>

                        <GiHamburgerMenu/>
                    </div>

                </div>
        );
    }
}

export default Navbar;