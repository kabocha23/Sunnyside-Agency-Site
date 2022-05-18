import React, { Component } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial'
import imageEmily from '../images/image-emily.jpg';
import imageThomas from '../images/image-thomas.jpg';
import imageJennie from '../images/image-jennie.jpg';


class Testimonials extends Component{
    // store testimonials as object array, usestate

    render(){
        return(
            <div className='testimonials-container'>
                <div className='testimonials-title'>
                    <p>CLIENT TESTIMONIALS</p>
                </div>
                <div className='testimonials-boxes'>
                    <div className='testimonials-box'>
                        <Testimonial
                            profilePic={imageEmily}
                            blurb="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always a hit"
                            name="Emily R."
                            occupation="Managing Director"
                        />
                    </div>
                    <div className='testimonials-box'>
                        <Testimonial
                            profilePic={imageThomas}
                            blurb="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                            name="Thomas S."
                            occupation="Chief Operating Officer"
                        />
                    </div>
                    <div className='testimonials-box'>
                        <Testimonial
                            profilePic={imageJennie}
                            blurb="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                            name="Jennie F."
                            occupation="Business Owner"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;