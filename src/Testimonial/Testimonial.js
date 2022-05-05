import React from 'react';
import './Testimonial.css'

const Testimonial = ({profilePic, blurb, name, occupation}) => {

    return (
        <div className='testimonial-container'>
            <img src={profilePic} alt='client-headshot' className='testimonial-image' />
            <p>{blurb}</p>
            <p>{name}</p>
            <p>{occupation}</p>
        </div>
    )
}

export default Testimonial;