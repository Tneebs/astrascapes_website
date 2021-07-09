import React from 'react';
import Logo from '../images/astrascapes-black.png';
import Garden from '../images/garden.webp';

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
    <img src={Garden} className='header-pics' />

    <div className='header-quote'>
        <span className='header-des'>
            Beautify Your Outdoor
            <span> {'&'} </span>
            Indoor Space
        </span>

        <div className='header-break'></div>

        <a href='/contacts' className='get-quote'> GET A QUOTE {'>'} </a>
    </div>
</div>
</div>
    )
}

export default Header;