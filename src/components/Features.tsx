import React from 'react'
import {
    ImSphere,
    ImTrophy,
    ImKey2,
    ImLocation,
    ImLock,
    ImStatsDots,
} from 'react-icons/im'

function Features() {
    return (
        <div className='features'>
            <div className='feature'>
                <div className='feature__icon'>
                    <ImSphere />
                </div>
                <h4 className='heading-4 heading-4__dark'>World's best luxury homes</h4>
                <p className='feature__text'>
                    {' '}
                    rerum neque molestiae, necessitatibus a? Architecto nesciunt
                    saepe ratione rem, in the place of good patronage
                </p>
            </div>
            <div className='feature'>
                <div className='feature__icon'>
                    <ImTrophy />
                </div>
                <h4 className='heading-4 heading-4__dark'>Only the best properties</h4>
                <p className='feature__text'>
                    stinctio id rerum neque molestiae, necessitatibus a?
                    Architecto nesciunt saepe ratione rem, laboriosam laborum
                    coming home
                </p>
            </div>

            <div className='feature'>
                <div className='feature__icon'>
                    <ImKey2 />
                </div>
                <h4 className='heading-4 heading-4__dark'>New homes in one week</h4>
                <p className='feature__text'>
                    Quisquam distinctio id rerum neque molestiae, necessitatibus
                    a? Architecto nesciunt saepe ratione rem, laboriosam laborum
                    perspiciatis?
                </p>
            </div>
            <div className='feature'>
                <div className='feature__icon'>
                    <ImStatsDots />
                </div>
                <h4 className='heading-4 heading-4__dark'>Top 1% of realtors</h4>
                <p className='feature__text'>
                    Going to the market of real investment platforms in the best
                    and most comfortable places in the world, you wouldn't
                    actually know then things start to get over board
                </p>
            </div>
            <div className='feature'>
                <div className='feature__icon'>
                    <ImLocation />
                </div>
                <h4 className='heading-4 heading-4__dark'>All homes in top locations</h4>
                <p className='feature__text'>
                    Quisquam distinctio id rerum neque molestiae, necessitatibus
                    a? Architecto nesciunt saepe ratione rem, laboriosam laborum
                    perspiciatis?
                </p>
            </div>
            <div className='feature'>
                <div className='feature__icon'>
                    <ImLock />
                </div>
                <h4 className='heading-4 heading-4__dark'>Secure payment in Wesycle</h4>
                <p className='feature__text'>
                    sit amet consectetur adipisicing elit. Illo mollitia
                    repudiandae iure voluptatum, totam doloribus magni quis
                    veniam ratione. Officia magni, vel reiciendis culpa deserunt
                    ut rem incidunt ehappening{' '}
                </p>
            </div>
        </div>
    )
}

export default Features
