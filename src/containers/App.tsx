import React from 'react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Features from '../components/Features'
import Realtors from '../components/Realtors'
import StoryContent from '../components/StoryContent'
import StoryPictures from '../components/StoryPictures'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Homes from '../components/Homes'
import Back from '../images/back.jpg'
import Hero from '../images/hero.jpeg'

const storyStyle = {
    backgroundImage: `linear-gradient(rgba(198, 153, 99, .7), rgba(198, 153, 99, .5)), url(${Back})`,
    width: '100%',
}
const headerStyle = {
    backgroundImage: `linear-gradient(rgba(16, 29, 44, .90), rgba(16, 29, 44, .90)), url(${Hero})`,
}

function App() {
    return (
        <div className='app'>
            {/* <div className='section-sidebar'>
                <Sidebar />
            </div> */}
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
            <div className='section-gallery'>
                <Gallery />
            </div>
            <div className='section-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default App
