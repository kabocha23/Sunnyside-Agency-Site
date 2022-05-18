import React from 'react';
import './Testimonial.css'

const Testimonial = ({profilePic, blurb, name, occupation}) => {

    return (
        <div className='testimonial-container'>
            <img src={profilePic} alt='client-headshot' className='testimonial-image' />
            <p id='blurb'>{blurb}</p>
            <p id='name'>{name}</p>
            <p id='occupation'>{occupation}</p>
        </div>
    )
}

export default Testimonial;