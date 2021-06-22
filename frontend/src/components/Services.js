import React from 'react';
import Trimming from '../images/tree_trimming.jpg';
import PW from '../images/pressure_washing.jpg';

const Services = () => {
    return(
        <div className='services-container'>

            <div className='services-title-container'>
                <h3 className='services-title'>Our Services</h3>
                <p className='services-title-text'>Whether it be a normal cut and trim or the whole yard 
                make-over, we're here to help. At AstraScapes, we strive to bring the best looking lawn 
                to your neighborhood.</p>
                <p className='services-title-text-line'>______________________________________________________________________________________________________________________________________</p>
            </div>

            <br/>

            <div className='services-images-container'>
                <div className='services-landscaping-container'>
                    {/* <img className='services-landscaping-img' alt='services-landscaping-img' src={} /> */}
                    <div className='services-landscaping-img' /> {/* placer div for img */}
                    <h2 className='services-landscaping-title'>Landscaping</h2>
                </div>
                <div className='services-landscaping-container'>
                    <div className='services-landscaping-img' />
                    <h2 className='services-landscaping-title'>Stone, Deck {'&'} Paving</h2>
                </div>
            </div>

            <div className='services-images-container'>
                <div className='services-landscaping-container'>
                    <img className='services-landscaping-img' alt='services-landscaping-img' src={Trimming} />
                    <h2 className='services-landscaping-title'>Tree / ShrubTrimming</h2>
                </div>
                <div className='services-landscaping-container'>
                    <img className='services-landscaping-img' alt='services-landscaping-img' src={PW} />
                    <h2 className='services-landscaping-title'>Pressure Washing</h2>
                </div>
            </div>
        </div>
    )
}

export default Services;