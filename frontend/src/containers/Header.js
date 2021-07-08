import React from 'react';

const Header = () => {
    return (
        <div className='header-container'>

            <div className='header-top'>
                <div className='header-logo'>
                    <a href='/' alt='AstraScapes, LLC.'> AstraScapes, LLC. </a>
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
                    <div className='header-quote'>
                        <span className='header-des'>
                            Beautify Your Outdoor and Indoor Space
                        </span>

                        <div className='header-break'></div>

                        <span className='get-quote'> GET A QUOTE {'>'} </span>
                    </div>
            </div>
        </div>
    )
}

export default Header;