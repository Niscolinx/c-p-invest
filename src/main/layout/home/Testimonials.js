import React from 'react'
import Story from '../../../images/story-2.jpg'
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => (
    <div className='testimonials'>
        <div className='testimonial'>
            <img src={Story} className='testimonial__img' alt=''/>
            <h2 className='testimonial__name'>Hello world</h2>
            <p className='testimonial__location'>United States</p>
            <p className='testimonial__text'>loremjsafns fsfjsf sjfasnf sfjskfsfansdn f fjafsdbf sjfsdjfjnjsnfshf jsnf</p>

            <div className='testimonial__rating'>
                <AiFillStar className='testimonial__rating--star'/>
                <AiFillStar className='testimonial__rating--star'/>
                <AiFillStar className='testimonial__rating--star'/>
                <AiFillStar className='testimonial__rating--star'/>
                <AiFillStar className='testimonial__rating--star'/>
            </div>
        </div>
    </div>
)

export default Testimonial
