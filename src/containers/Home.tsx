import React from 'react'

import Header from '../components/layout/home/Header'
import Features from '../components/layout/home/Features'
import Activities from '../components/layout/home/Activities'
import StoryContent from '../components/layout/home/StoryContent'
import StoryPictures from '../components/layout/home/StoryPictures'
import Transactions from '../components/layout/home/Transactions'
import WhyChooseUs from '../components/layout/home/WhyChooseUs'

import Back from '../images/back.jpg'
import Hero from '../images/hero.jpg'
import WhyUs from '../images/whyChooseUs.jpg'

const storyStyle = {
    backgroundImage: `linear-gradient(rgba(198, 153, 99, .7), rgba(198, 153, 99, .7)), url(${Back})`,
    width: '100%',
}
const headerStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .6), rgba(16, 29, 44, .6)), url(${Hero})`,
}
const whyChooseUsStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .8), rgba(16, 29, 44, .7)), url(${WhyUs})`,
    backgroundPosition: 'cover',
}

function Layout() {
    return (
        <>
            <div className='section-header' style={headerStyle}>
                <Header />
            </div>

            <div className='section-features'>
                <Features />
            </div>
            <div className='section-story__pictures' style={storyStyle}>
                <StoryPictures />
            </div>
            <div className='section-story__content'>
                <StoryContent />
            </div>
            <div className='section-activities'>
                <Activities />
            </div>
            <div className='section-transactions'>
                <Transactions />
            </div>
            <div className='section-whyChooseUs' style={whyChooseUsStyle}>
                <WhyChooseUs />
            </div>
        </>
    )
}

export default Layout
