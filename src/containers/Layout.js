import React from 'react'


import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/css/animate.min.css'
// import './assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
// import './assets/css/demo.css'
// import './assets/css/pe-icon-7-stroke.css'

function Layout(props) {


    let isAdmin = props.isAdmin.includes('/admin')
    let toRender;
    if(isAdmin){
        console.log('Is the admin', props.isAdmin)
        import('bootstrap/dist/css/bootstrap.min.css').then((Baz) => {
            console.log('the import', Baz)
        })
        import('../assets/css/animate.min.css').then((Baz) => {
            console.log('the import', Baz)
        })
        import('../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0').then((Baz) => {
            console.log('the import', Baz)
        })
        import('../assets/css/demo.css').then((Baz) => {
            console.log('the import', Baz)
        })
        import('../assets/css/pe-icon-7-stroke.css').then((Baz) => {
            console.log('the import', Baz)
        })
        toRender = props.children
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

    return (
        <>
            {toRender}
        </>
    )
}

export default Layout
