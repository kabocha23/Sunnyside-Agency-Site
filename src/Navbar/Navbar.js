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
                        <a><p>About</p></a>
                        <a><p>Services</p></a>
                        <a><p>Projects</p></a>
                        <a><p>Contact</p></a>
                </div>
            </div>
        )
    }
}

export default Navbar;