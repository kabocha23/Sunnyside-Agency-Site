import React, { Component } from 'react';
import './Body.css';

class Body extends Component{

    render(){
        return(
            <div className='body-container'>
                {/* Transform your brand - Egg picture row */}
                <div className='body-egg'>
                    <div className='body-egg-image'>
                        <img src={require('../images/image-transform.jpg')} alt='egg' />                        
                    </div>
                    <div className='body-egg-text'>
                        <h1>Transform your brand</h1>
                        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you.</p>
                        <a><h3>LEARN MORE</h3></a>
                    </div>
                </div>

                {/*  Stand out - Cup picture row */}
                <div className='body-cup'>
                    <div className='body-cup-image'>
                        <img src={require('../images/image-stand-out.jpg')} alt='cup'/>
                    </div>
                    <div className='body-cup-text'>
                        <h1>Stand out to the right audience</h1>
                        <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                        <a><h3>LEARN MORE</h3></a>
                    </div>
                    
                </div>

                {/* Graphic design - Photography row */}
                <div className='body-cherry-orange'>
                    <div className='body-graphic'>
                        <div className='body-graphic-image'>
                            <img src={require('../images/image-graphic-design.jpg')} alt='cherry'/>                            
                        </div>
                        <div className='body-graphic-text'>
                            <h2>Graphic Design</h2>
                            <p>Great design makes you memorable. We deliver artwork that underscored your brand message and captures potential clients' attention.</p>    
                        </div>

                    </div>
                    <div className='body-photography'>
                        <div className='body-photography-image'>
                            <img src={require('../images/image-photography.jpg')} alt='orange'/>
                        </div>
                        <div className='body-photography-text'>
                            <h2>Photography</h2>
                            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;