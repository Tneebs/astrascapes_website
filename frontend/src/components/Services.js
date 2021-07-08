import React from 'react';


import Garden from '../images/garden.webp'
import Trimming from '../images/tree_trimming.jpg';
import PW from '../images/pressure_washing.jpg';

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-top'>
                <span className='our-services'> Our Services </span>
                <p className='services-des'>
                    Whether it be a normal cut and trim or the whole yard make-over, we're here to help.
                    At AstraScapes, we strive to bring the best looking lawn
                    to your neighborhood.
                </p>

                <div className='home-breaks'></div>
            </div>

            <div className='services-bottom'>
                <div className='services-cards'>
                    <img src={Garden} className='services-pics' alt='Watering Plants' />
                    <span className='services-cards-title'> Landscaping </span>
                </div>

                <div className='services-cards'>
                    <img src={Garden} className='services-pics' alt='Garden' />
                    <span className='services-cards-title'> Stone, Deck & Paving </span>
                </div>

                <div className='services-cards'>
                    <img src={Trimming} className='services-pics' alt='Trimming' />
                    <span className='services-cards-title'> Tree / ShrubTrimming </span>
                </div>

                <div className='services-cards'>
                    <img src={PW} className='services-pics' alt='Power Washing' />
                    <span className='services-cards-title'> Pressure Washing </span>
                </div>
            </div>
        </div>
    )
}

export default Services;