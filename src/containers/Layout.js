import React from 'react'


import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'

//  const bootstrap = 'bootstrap/dist/css/bootstrap.min.css'
// const animate = '../assets/css/animate.min.css'
// const lightBootstrap = '../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
// const cssDemo = '../assets/css/demo.css'
// const stroke = '../assets/css/pe-icon-7-stroke.css'


// async function main(props) {
    //     // const myModule = await import('./myModule.js')
    
    //     // const { export1, export2 } = await import('./myModule.js')
    
    //     const all = await Promise.all([
        //         import('bootstrap/dist/css/bootstrap.min.css'),
        //         import('../assets/css/animate.min.css'),
        //         import('../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'),
//     ])
//     console.log('all promises', all)
//     if(all){
    //        return toRender = props.children
//     }
// }

async function Layout(props) {
    
    let toRender;

    let isAdmin = props.isAdmin.includes('/admin')
    if(isAdmin){
        // console.log('Is the admin', props.isAdmin)
        // import(bootstrap).then((Baz) => {
        //     console.log('the import', Baz)
        // })
        // import(animate).then((Baz) => {
        //     console.log('the import', Baz)
        // })
        // import(lightBootstrap).then((Baz) => {
        //     console.log('the import', Baz)
        // })
        // import(cssDemo).then((Baz) => {
        //     console.log('the import', Baz)
        // })
        // import(stroke).then((Baz) => {
        //     console.log('the import', Baz)
        // })
        //  await Promise.all([
        //     import('bootstrap/dist/css/bootstrap.min.css'),
        //     import('../assets/css/animate.min.css'),
        //     import('../assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'),
        // ])
        // console.log('all promises')
        toRender = props.children

        console.log('the render', toRender)
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

    console.log('the render', toRender)

    return (
        <>
            {toRender}
        </>
    )
}

export default Layout
