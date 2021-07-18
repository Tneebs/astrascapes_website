import React from 'react';
import FB from '../images/Facebook-logo.jpeg';
import IG from '../images/IG.jpeg'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left'>

                <a href='https://www.facebook.com/Astrascapes' className='footer-icon'>
                    <img src={FB} className='footer-pic' alt='Facebook' />
                </a>

                <a href='https://www.instagram.com/astrascapes' className='footer-icon'>
                    <img src={IG} className='footer-pic' alt='Instagram' />
                </a>

            </div>

            <div className='footer-right'>
                <span className='trademark'> © AstraScapes, LLC. </span>
            </div>
        </div>
    )
}

export default Footer;