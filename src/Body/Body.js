import React, { Component } from 'react';
import './Body.css';

class Body extends Component{

    render(){
        return(
            <div className='body-container'>
                <div className='body-egg'>
                    <img src={require('../images/image-transform.jpg')} />
                    <p>Transform your brand</p>
                </div>
                <div className='body-cup'>
                    <img src={require('../images/image-stand-out.jpg')} />
                    <p>Stand out to the right audience</p>
                </div>
                <div className='body-cherry-orange'>
                    <p>Graphic Design</p>
                    <p>Photography</p>
                </div>
            </div>
        )
    }
}

export default Body;