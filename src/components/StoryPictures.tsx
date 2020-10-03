import React from 'react'
import Image1 from '../images/story-1.jpeg'
import Image2 from '../images/story-2.jpeg'

function StoryPictures() {
    return (
        <>
            <img src={Image1} alt="" className='story__image1'/>
            <img src={Image2} alt="" className='story__image2'/>
        </>
    )
}

export default StoryPictures
