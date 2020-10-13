import React, {useState} from 'react'


import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'
import { truncate } from 'fs';

//  const bootstrap = 'bootstrap/dist/css/bootstrap.min.css'
// const animate = '../assets/css/animate.min.css'
// const lightBootstrap = '../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
// const cssDemo = '../assets/css/demo.css'
// const stroke = '../assets/css/pe-icon-7-stroke.css'

function Layout(props) {

    const [state, setState] = useState({
        content: ''
    })

    let toRender;

    let isAdmin = props.isAdmin.includes('/admin')
    if(isAdmin){
        console.log('Is the admin', props.isAdmin)

        localStorage.setItem('cssLoaded', false)
        import('bootstrap/dist/css/bootstrap.min.css').then((Baz) => {
            console.log('the import1', Baz)
        })
        import('../assets/css/animate.min.css').then((Baz) => {
            console.log('the import2', Baz)
        })
        import('../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0').then((Baz) => {
            console.log('the import3', Baz)
        })
        import('../assets/css/demo.css').then((Baz) => {
            console.log('the import4', Baz)
        })
       const all =  import('../assets/css/pe-icon-7-stroke.css').then(Baz => {
            console.log('the import5', Baz)
       
        })
        all.finally(result => {
            console.log('resolved', result)
            // localStorage.getItem('cssLoading')
            localStorage.setItem('cssLoaded', true)
            const isCssLoaded =  localStorage.getItem('cssLoaded')

            if(isCssLoaded){
                localStorage.setItem('loaded', true)
            }

        })
       
        console.log('local', localStorage.getItem('loaded'))
        toRender = props.children
        
    }
    else{
        console.log('Not the admin', props.isAdmin)
        localStorage.clear('loaded', 'cssLoaded')
        toRender = <><div className='section-subHeader'>
                <SubHeader />
            </div>
            <main className='main'>{props.children}</main>
            <div className='section-footer'>
                <Footer />
            </div> </>
    }

    console.log('the render', toRender)
    
    return (
        <>
            {toRender}
        </>
    )
}

export default Layout
