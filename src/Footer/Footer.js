import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{

    render(){
        return(
            <div className='footer-container'>
                <div className='footer-title'>
                    <p>sunnyside</p>
                </div>
                <div className='footer-about'>
                    <p>About</p>
                </div>
                <div className='footer-services'>
                    <p>Services</p>
                </div>
                <div className='footer-projects'>
                    <p>Projects</p>
                </div>
                <div className='footer-contact'>

                </div>
            </div>
        )
    }
}

export default Footer;