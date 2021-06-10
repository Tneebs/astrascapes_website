import React from 'react';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-upper-container'>
                <div className='header-logo-container'>
                    <a href='/home' header-logo>AstraScapes, LLC.</a>
                </div>
                <div className='header-navlinks-container'>
                    <a href='/services' className='navlinks'>Services</a>
                    <a href='/gallery' className='navlinks'>Gallery</a>
                    <a href='/contacts' className='navlinks'>Contacts</a>
                    <a href='/book' className='navlinks'>Book Online</a>
                    <a href='/plans' className='navlinks'>Plans & Pricing</a>
                </div>
            </div>
                <div className='header-lower-container'>
                    <div className='header-get-quote-container'>
                        <h3 className='inner-get-quote-1'>Beautify Your Outdoor and</h3>
                        <h3 className='inner-get-quote-2'>Indoor Space</h3>
                        <p className='quote-line'>_______________________________</p>
                        <h3 className='get-quote'>Get a Quote {'>'}</h3>
                    </div>
                </div>
        </div>
    )
}

export default Header;