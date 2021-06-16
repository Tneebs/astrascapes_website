import React from 'react';

const Services = () => {
    return(
        <div className='services-container'>

            <div className='services-title-container'>
                <h3 className='services-title'>Our Services</h3>
                <p className='services-title-text'>Whether it be a normal cut and trim or the whole yard 
                make-over, we're here to help. At AstraScapes, we strive to bring the best looking lawn 
                to your neighborhood.</p>
            </div>

            <div className='services-images-upper-container'>
                <div className='services-landscaping-container'>
                    {/* <img className='services-landscaping-img' alt='services-landscaping-img' src={} /> */}
                    <div className='services-landscaping-img' /> {/* placer div for img */}
                    <h2 className='services-landscaping-title'>Landscaping</h2>
                </div>
            </div>
        </div>
    )
}

export default Services;