import React from 'react';

const Home = () => {
    return(
        <div className='home-container'>

            <div className='home-upper-container'>
                <div className='home-upper-left-container'>
                    {/* <img className='home-service-img' alt='home-service-img' src={} /> */}
                    <div className='home-service-img' /> {/* placer div for image*/}
                </div>
                <div className='home-upper-right-container'>
                    <div className='home-upper-right-text'>
                        <h3 className='home-service-plan-text'>Honest, Quality, and Hospitable work at a incredible price. Interested in our services or plans?</h3>
                    </div>
                </div>
            </div>

            <div className='home-middle-spacer-container' />

            <div className='home-lower-container'>
                <div className='home-lower-left-container'>
                    {/*<img className='home-about-img' alt='home-about-img' src={} />*/}
                    <div className='home-about-img'> {/* placer div for image*/}
                        <p>placer for img</p>
                    </div>
                </div>
                <div className='home-lower-right-container'>
                        <span className='home-lower-right-title'>
                            <h2 className='home-about-us-title-left'>A B O U T</h2>
                            <h2 className='home-about-us-title-right'>U S</h2>
                        </span>
                    <div className='home-lower-right-text'>
                        <p className='home-about-us-text'>Filler text for about us.</p>
                    </div>
                    <div className='home-lower-container-btn'>
                        <a href='/services' className='learn-more-services'>
                            <button className='home-lower-btn'>Learn More</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;