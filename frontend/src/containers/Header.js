import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow';

import Logo from '../images/astrascapes-black.png';
import Garden from '../images/garden.webp';
import Walk from '../images/walkpath.webp';
import White from '../images/white-flower.webp';
import garden1 from '../images/gardening1.jpeg';
import garden2 from '../images/gardening2.jpeg';
import landscaping1 from '../images/landscaping1.jpg';
import landscaping2 from '../images/landscaping2.jpeg';
import landscaping3 from '../images/landscaping3.jpeg';




const Header = () => {
    return (
        <div className='header-container'>

            <div className='header-top'>
                <div className='header-logo'>
                    <a href='/' alt='AstraScapes, LLC.'>
                        <img src={Logo} className='logo' alt='Logo-blk'/>
                    </a>
                </div>

                <div className='header-navlinks-container'>
                    <a href='/services' className='navlinks'> Services </a>
                    <a href='/gallery' className='navlinks'> Gallery </a>
                    <a href='/contacts' className='navlinks'> Contacts </a>
                    <a href='/booking' className='navlinks'> Book Online </a>
                    <a href='/plans' className='navlinks'> Plans {'&'} Pricing </a>
                </div>
            </div>

            <div className='header-bottom'>
                <BackgroundSlideshow images={[Garden, White, garden1, Walk, garden2, landscaping1, landscaping2, landscaping3]} />
                
                <div className='header-quote'>
                    <span className='header-des'>
                        Beautify Your Outdoor
                        <span> {'&'} </span>
                        Indoor Space
                    </span>

                    <div className='header-break' />

                    <a href='/contacts' className='get-quote'> GET A QUOTE {'>'} </a>
                </div>
            </div>
            
        </div>
    )
}

export default Header;