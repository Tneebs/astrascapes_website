import React from 'react';
// import FB from '../images/fb_icon.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <a href='https://www.facebook.com/Astrascapes'>
                    {/* <img className='facebook' alt='facebook-logo' src={FB} /> */}
                    <p className='facebook'> Facebook </p>
                </a>
                <a href='https://www.instagram.com/astrascapes'>
                    <p className='instagram' className='footer-icon'> Instagram </p>
                </a>
            </div>

            <div className='footer-right'>
                <span className='trademark'> © AstraScapes, LLC. </span>
            </div>
        </div>
    )
}

export default Footer;