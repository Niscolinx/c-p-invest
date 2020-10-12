import React from 'react'

import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'

function Layout(props) {

    let isAdmin = props.isAdmin.includes('/admin')
    let toRender;
    if(isAdmin){
        console.log('Is the admin', props.isAdmin)
        toRender = props.children
        //Do something
    }
    else{
        console.log('Not the admin', props.isAdmin)
        toRender = <><div className='section-subHeader'>
                <SubHeader />
            </div>
            <main className='main'>{props.children}</main>
            <div className='section-footer'>
                <Footer />
            </div> </>
    }

    console.log('to render', toRender)
    return (
        <>
            {toRender}
        </>
    )
}

export default Layout
