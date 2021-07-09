import React from 'react';
import FB from '../images/fb_icon.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left-container'>
                <a href='https://www.facebook.com/Astrascapes' className='social-media'>
                    {/* <img className='facebook' alt='facebook-logo' src={FB} /> */}
                    <p className='facebook' color='black'>Facebook</p>
                </a>
                <a href='https://www.instagram.com/astrascapes' className='socia-media'>
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