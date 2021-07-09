import React from 'react';

import Yellow from '../images/home-yellow-flower.webp'
import Walkpath from '../images/home-walkpath.webp'
import Shoes from '../images/home-shoes.webp'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-top-half'>
                <div className='home-cards'>
                    <img src={Yellow} className='home-service-img' alt='home-service-img' />
                    <div className='home-des-text'>
                        <span>
                            Honest, Quality, and Hospitable work at a incredible price.
                            Interested in our services or plans?
                        </span>
                        <p className='home-read-more'> Read More {'>'} </p>
                    </div>
                </div>

                <div className='home-breaks'></div>

                <div className='home-cards'>
                    <img src={Walkpath} className='home-service-img' alt='home-service-img' />
                    <div className='home-des-text'>
                        <span>
                            Pressure Washing and Detailing Solutions
                        </span>
                        <p className='home-read-more'> Read More {'>'} </p>
                    </div>
                </div>

                <div className='home-breaks'></div>
            </div>
            <div className='home-bottom-half'>
                <div className='home-bottom-half-left'>
                    <img src={Shoes} className='home-about-pic' alt='Shoes' />
                </div>
                <div className='home-bottom-half-right'>
                        <div className='home-about-us-title'>
                            <span> A B O U T </span>
                            <span className='home-us'> U S </span>
                        </div>

                        <div className='home-about-us-des'>
                            <p> Filler text for about us. </p>
                        </div>

                        <a href='/services' alt='Services Page'>
                            <button className='home-learn-button'>Learn More</button>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Home;