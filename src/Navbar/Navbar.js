import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div className='navbar-container'>
                <div className='navbar-title'>
                    <p>sunnyside</p>
                </div>
                <div className='navbar-menu'>
                    <div className='navbar-about'>
                        <p>About</p>
                    </div>
                    <div className='navbar-services'>
                        <p>Services</p>
                    </div>
                    <div className='navbar-projects'>
                        <p>Projects</p>
                    </div>
                    <div className='navbar-contact'>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;