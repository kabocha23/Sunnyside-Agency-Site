import React, { Component } from 'react';
import './Footer.css';
import FBIcon from '../images/icon-facebook.svg';
import IGIcon from '../images/icon-instagram.svg';
import TwtrIcon from '../images/icon-twitter.svg';
import PinsIcon from '../images/icon-pinterest.svg';

class Footer extends Component{

    render(){
        return(
            <div className='footer-container'>
                <div className='footer-title'>
                    <h2>sunnyside</h2>
                </div>
                <div className='footer-links'>
                    <div className='footer-link'>
                        <p>About</p>
                    </div>
                    <div className='footer-link'>
                        <p>Services</p>
                    </div>
                    <div className='footer-link'>
                        <p>Projects</p>
                    </div>
                </div>
                <div className='footer-contacts'>
                    <div className='footer-contact'>
                        <a><img src={FBIcon} alt='fb'/></a>                 </div>
                    <div className='footer-contact'>
                        <a><img src={IGIcon} alt='ig'/></a>                 </div>
                    <div className='footer-contact'>
                        <a><img src={TwtrIcon} alt='twtr'/></a>
                    </div>
                    <div className='footer-contact'>
                        <a><img src={PinsIcon} alt='pins'/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;