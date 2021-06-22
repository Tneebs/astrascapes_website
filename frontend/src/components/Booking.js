import React from 'react';
import Sight from '../images/sight_consultation.jpg';
import Bronze_LC from '../images/bronze_package_lawn.jpg';
import Silver_LC from '../images/silver_package_lawn.jpg';
import Gold_LC from '../images/gold_package_lawn.jpg';
import Bronze_PW from '../images/bronze_package_pw.jpg';

const Booking = () => {
    return(
        <div className='main-container'>
                <h2 className='container-title'>Our Services</h2>
                <br/>
                <br/>
                <div className='main-x-container'>
                    <div className='left-y-container'>
                        <img className='left-img' alt='sight-img' src={Sight} />
                    </div>
                    <div className='right-y-container'>
                        <h2 className='right-title'>Sight Consultation</h2>
                        <p className='right-text-1'>A walk around to assess what needs are wanting to be met.</p>
                        <p className='right-text-2'>Read More<br/>15 min<br/>Free Consultation</p>
                        <button className='button'>Book Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='main-x-container'>
                    <div className='left-y-container'>
                        <img className='left-img' alt='bronze-lc-img' src={Bronze_LC} />
                    </div>
                    <div className='right-y-container'>
                        <h2 className='right-title'>Bronze Package Lawn Care</h2>
                        <p className='right-text-1'>Bronze Package Lawn Care, Cut, Edge, Weedeat, and Blow off/Clean-up.</p>
                        <p className='right-text-2'>Read More<br/>15 min<br/>$40</p>
                        <button className='button'>Book Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='main-x-container'>
                    <div className='left-y-container'>
                        <img className='left-img' alt='silver-lc-img' src={Silver_LC} />
                    </div>
                    <div className='right-y-container'>
                        <h2 className='right-title'>Silver Package Lawn Care</h2>
                        <p className='right-text-1'>Weekly Lawn maintenance including Bronze Package perks</p>
                        <p className='right-text-2'>Read More<br/>30 min<br/>$40</p>
                        <button className='button'>Book Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='main-x-container'>
                    <div className='left-y-container'>
                        <img className='left-img' alt='gold-lc-img' src={Gold_LC} />
                    </div>
                    <div className='right-y-container'>
                        <h2 className='right-title'>Gold Package Lawn Care</h2>
                        <p className='right-text-1'>Lawn Maintenance to the extreme; Cut, Edge, Weedeat, Blow off and More</p>
                        <p className='right-text-2'>Read More<br/>30 min<br/>$160</p>
                        <button className='button'>Book Now</button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='main-x-container'>
                    <div className='left-y-container'>
                        <img className='left-img' alt='bronze-pw-img' src={Bronze_PW} />
                    </div>
                    <div className='right-y-container'>
                        <h2 className='right-title'>Bronze Package Pressure Washing</h2>
                        <p className='right-text-1'>A gentle cleanse of your Walk ways and Front porch.</p>
                        <p className='right-text-2'>Read More<br/>1 Hr<br/>$200</p>
                        <button className='button'>Book Now</button>
                    </div>
                </div>
                <br/>
                <br/>
        </div>
    )
}

export default Booking