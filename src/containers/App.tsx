import React from 'react'

//import Sidebar from '../components/Sidebar'
import SubHeader from '../components/SubHeader'
import Header from '../components/Header'
import Features from '../components/Features'
import Activities from '../components/Activities'
import StoryContent from '../components/StoryContent'
import StoryPictures from '../components/StoryPictures'
import Transactions from '../components/Transactions'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

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
    backgroundPosition: 'cover'
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
            <div className='section-activities'>
                <Activities />
            </div>
            <div className='section-transactions'>
                <Transactions />
            </div>
            <div className="section-whyChooseUs" style={whyChooseUsStyle}>
                <WhyChooseUs/>
            </div>
            <div className='section-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default App
