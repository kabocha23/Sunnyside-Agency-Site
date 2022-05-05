import React, { Component } from 'react';
import './Header.css';

class Header extends Component{

    render(){
        return(
            <div className='header-container'>
                <div className='header-title'>
                    <p>WE ARE CREATIVES</p>
                </div>
                <div className='header-image'>
                    <img src={require('../images/image-header.jpg')} alt='We Are Creatives' />
                </div>
            </div>
        )
    }
}

export default Header;