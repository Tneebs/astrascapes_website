import React from 'react';

import Yellow from '../images/home-yellow-flower.webp';
import Walkpath from '../images/home-walkpath.webp';
import Color_Logo from '../images/astrascapes-color.png';

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
                        <a href='/services' className='read-more'>
                            <p className='home-read-more'> Read More {'>'} </p>
                        </a>
                    </div>
                </div>

                <div className='home-breaks'></div>

                <div className='home-cards'>
                    <img src={Walkpath} className='home-service-img' alt='home-service-img' />
                    <div className='home-des-text'>
                        <span>
                            Pressure Washing and Detailing Solutions
                        </span>
                        <a href='/services' className='read-more'>
                            <p className='home-read-more'> Read More {'>'} </p>
                        </a>
                    </div>
                </div>

                <div className='home-breaks'></div>
                
            </div>
            <div className='home-bottom-half'>
                <div className='home-img-container'>
                    <img src={Color_Logo} className='home-about-pic' alt='Shoes' />
                </div>
                <div className='home-about-us-container'>
                        <div className='home-about-us-title'>
                            <span> A B O U T </span>
                            <span className='home-us'> U S </span>
                        </div>

                        <div className='home-about-us-des'>
                            <p>
                                We take care of the curb appeal from A to Z.
                                The pride in our work and our members shine when it comes to appearance.
                            </p>
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