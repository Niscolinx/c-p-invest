import React from 'react'
import House1 from '../images/house-1.jpeg'
import House2 from '../images/house-2.jpeg'
import House3 from '../images/house-3.jpeg'
import House4 from '../images/house-4.jpeg'
import House5 from '../images/house-5.jpeg'
import House6 from '../images/house-6.jpeg'
import { FaHeart, FaMapPin} from 'react-icons/fa'
import { CgProfile} from 'react-icons/cg'
import { ImKey} from 'react-icons/im'
import { BiLandscape} from 'react-icons/bi'

function Homes() {
    return (
        <>
            <div className='home'>
                <img className='home__img' src={House1} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Beautiful Family House</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>USA</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>5 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        323 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$1,300,421</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
            <div className='home'>
                <img className='home__img' src={House2} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Modern Glass Villa</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>Canada</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>4 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        223 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$900,531</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
            <div className='home'>
                <img className='home__img' src={House3} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Cozy country House</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>Australia</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>9 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        523 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$1,690,833</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
            <div className='home'>
                <img className='home__img' src={House4} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Majestic Family House</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>Germany</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>13 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        620 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$2,600,923</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
            <div className='home'>
                <img className='home__img' src={House5} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Modern Family Apartment</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>Brazil</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>7 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        494 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$1,167,013</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
            <div className='home'>
                <img className='home__img' src={House6} alt='' />
                <div className='home__like'>
                    <FaHeart/>
                </div>
                <h5 className='home__name'>Luxury Family House</h5>
                <div className='home__location'>
                    <FaMapPin className='home__icon'/>
                    <p>Berlin</p>
                </div>
                <div className='home__rooms'>
                    <CgProfile className='home__icon'/>
                    <p>6 rooms</p>
                </div>
                <div className='home__areas'>
                    <BiLandscape className='home__icon'/>
                    <p>
                        603 m<sup>2 </sup>
                    </p>
                </div>
                <div className='home__price'>
                    <ImKey className='home__icon'/>
                    <p>$1,552,032</p>
                </div>
                <button className='btn home__btn'>Contact Realtor</button>
            </div>
          
        </>
    )
}

export default Homes
