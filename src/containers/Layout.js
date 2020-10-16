import React from 'react'
import { useLastLocation } from 'react-router-last-location'

import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'

function Layout(props) {
    const lastLocation = useLastLocation()

    let fromlocationPath = ''
    for (let i in lastLocation) {
        if (i === 'pathname') {
            fromlocationPath = lastLocation[i]
        }
    }
    const fromLocationSplit = fromlocationPath.split(' ')

    console.log('frompath', fromLocationSplit)

    //Check how this can be added to redux and called from there
    let toRender

    let isAdmin = props.isAdmin.includes('/admin')

    if (isAdmin) {
        console.log('Is the admin', props.isAdmin)

        localStorage.setItem('cssLoaded', false)
        import('bootstrap/dist/css/bootstrap.min.css').then((Baz) => {
            // console.log('the import1', Baz)
        })
        import('../assets/css/animate.min.css').then((Baz) => {
            //console.log('the import2', Baz)
        })
        import(
            '../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
        ).then((Baz) => {
            //console.log('the import3', Baz)
        })
        import('../assets/css/demo.css').then((Baz) => {
            // console.log('the import4', Baz)
        })
        const all = import('../assets/css/pe-icon-7-stroke.css').then((Baz) => {
            // console.log('the import5', Baz)
        })
        all.finally((result) => {
            localStorage.setItem('cssLoaded', true)
        })

        toRender = props.children
    } else {
        console.log('Not the admin', props.isAdmin)
        if (fromLocationSplit[0].includes('admin')) {
            console.log('reload now')
           // console.log('performance', window.Performance())
            window.location.reload()
        } else {
            console.log('dont reload')
        }
        localStorage.clear('loaded', 'cssLoaded')
        toRender = (
            <>
                <div className='section-subHeader'>
                    <SubHeader />
                </div>
                <a href='/' hidden>home</a>
                <main className='main'>{props.children}</main>
                <div className='section-footer'>
                    <Footer />
                </div>{' '}
            </>
        )
    }

    return <>{toRender}</>
}

export default Layout
