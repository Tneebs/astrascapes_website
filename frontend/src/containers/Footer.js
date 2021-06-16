import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left-container'>
                <a href='https://www.facebook.com' className='social-media'>
                    {/* <img className='facebook' alt='facebook-logo' src={} /> */}
                    <p className='facebook' color='black'>Facebook</p>
                    <p className='instagram' color='black'>Instagram</p>
                </a>
            </div>
            <div className='footer-right-container'>
                <p className='trademark'>© AstraScapes, LLC.</p>
            </div>
        </div>
    )
}

export default Footer;