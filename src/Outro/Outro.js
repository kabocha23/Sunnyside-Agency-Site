import React, { Component } from 'react';
import './Outro.css';

class Outro extends Component{

    render(){
        return(
            <div className='outro-container'>
                    <img src={require('../images/image-gallery-milkbottles.jpg')} alt='milk-bottles' />
                    <img src={require('../images/image-gallery-orange.jpg')} alt='orange-on-plate' />
                    <img src={require('../images/image-gallery-cone.jpg')} alt='empty-ice-cream-cone' />
                    <img src={require('../images/image-gallery-sugarcubes.jpg')} alt='sugarcube-wall' />
            </div>
        )
    }
}

export default Outro;