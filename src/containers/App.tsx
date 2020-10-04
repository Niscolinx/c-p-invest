import React from 'react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Features from '../components/Features'
import Activities from '../components/Activities'
import StoryContent from '../components/StoryContent'
import StoryPictures from '../components/StoryPictures'
import Footer from '../components/Footer'
import Homes from '../components/Homes'
import SubHeader from '../components/SubHeader'

import Back from '../images/back.jpg'
import Hero from '../images/hero.jpeg'

const storyStyle = {
    backgroundImage: `linear-gradient(rgba(198, 153, 99, .7), rgba(198, 153, 99, .5)), url(${Back})`,
    width: '100%',
}
const headerStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .8), rgba(16, 29, 44, .8)), url(${Hero})`,
}

function App() {
    return (
        <div className='app'>
            <div className='section-subHeader'>
                <SubHeader />
            </div>
            <div className='section-header' style={headerStyle}>
                <Header />
            </div>

            {/* <div className='section-realtors'>
                <Realtors />
            </div> */}
            <div className='section-features'>
                <Features />
            </div>
            <div className='section-story__pictures' style={storyStyle}>
                <StoryPictures />
            </div>
            <div className='section-story__content'>
                <StoryContent />
            </div>
            <div className='section-homes'>
                <Homes />
            </div>
            <div className='section-activities'>
                <Activities />
            </div>
            <div className='section-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default App
