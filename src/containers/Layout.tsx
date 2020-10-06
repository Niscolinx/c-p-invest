import React from 'react'

import SubHeader from '../components/layout/SubHeader'
import Footer from '../components/layout/Footer'

function Layout(props:any) {
    return (
        <>
            <div className='section-subHeader'>
                <SubHeader />
            </div>
            <main className='content'>
               {props.children}
            </main>
            <div className='section-footer'>
                <Footer />
            </div>
        </>
    )
}

export default Layout
