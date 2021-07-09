import React from 'react';

const Plans = () => {
    return(
        <div className='plans-main-container'>
            <h2 className='plans-container-title'>Choosing Your Pricing Plan</h2>
            <div className='plans-top-x-container'>

                <div className='plans-card-y-container'>
                    <div className='plans-card-top-container'>
                        <h2 className='plans-card-title'>Bronze Plan</h2>
                        <div className='plans-card-price-container'>
                            <span className='plans-card-price-sign'>$</span>
                            <span className='plans-card-price'>80</span>
                        </div>
                        <p className='plans-card-top-sm-text'>Every Month</p>
                        <p className='plans-card-top-m-text'>Lawn Care Bronze Package</p>
                        <p className='plans-card-top-sm-text'>Valid for 10 months</p>
                        <a href='/contacts'>
                            <button className='plans-btn'>Contact Us!</button>
                        </a>
                    </div>
                    <div className='plans-card-btm-container'>
                        <br/>
                        <p className='plans-card-top-m-text'>Lawn Care Bronze Package</p>
                        <p className='plans-card-top-m-text'>Bi-Weekly Maintenance</p>
                        <p className='plans-card-top-m-text'>Mow</p>
                        <p className='plans-card-top-m-text'>Edge</p>
                        <p className='plans-card-top-m-text'>Weedeat</p>
                        <p className='plans-card-top-m-text'>Blow off / Cleanup</p>
                    </div>
                </div>

                <div className='plans-card-y-container'>
                    <div className='plans-card-top-container'>
                        <h2 className='plans-card-title'>Silver Plan</h2>
                        <div className='plans-card-price-container'>
                            <span className='plans-card-price-sign'>$</span>
                            <span className='plans-card-price'>35</span>
                        </div>
                        <p className='plans-card-top-sm-text'>Every Week</p>
                        <p className='plans-card-top-m-text'>Lawn Care Silver Package</p>
                        <p className='plans-card-top-sm-text'>Valid for 36 weeks</p>
                        <a href='/contacts'>
                            <button className='plans-btn'>Contact Us!</button>
                        </a>
                    </div>
                    <div className='plans-card-btm-container'>
                        <br/>
                        <p className='plans-card-top-m-text'>Lawn Care Silver Package</p>
                        <p className='plans-card-top-m-text'>Weekly Maintenance</p>
                        <p className='plans-card-top-m-text'>Cut</p>
                        <p className='plans-card-top-m-text'>Edge</p>
                        <p className='plans-card-top-m-text'>Weedeat</p>
                        <p className='plans-card-top-m-text'>Blow off / Cleanup</p>
                    </div>
                </div>

                <div className='plans-card-y-container'>
                    <div className='plans-card-top-container'>
                        <h2 className='plans-card-title'>Gold Plan</h2>
                        <div className='plans-card-price-container'>
                            <span className='plans-card-price-sign'>$</span>
                            <span className='plans-card-price'>160</span>
                        </div>
                        <p className='plans-card-top-sm-text'>Every Month</p>
                        <p className='plans-card-top-m-text'>Lawn Care Gold Package</p>
                        <p className='plans-card-top-sm-text'>Valid for 12 months</p>
                        <a href='/contacts'>
                            <button className='plans-btn'>Contact Us!</button>
                        </a>
                    </div>
                    <div className='plans-card-btm-container'>
                        <br/>
                        <p className='plans-card-top-m-text'>Lawn Care Gold Package</p>
                        <p className='plans-card-top-m-text'>Mow</p>
                        <p className='plans-card-top-m-text'>Edge</p>
                        <p className='plans-card-top-m-text'>Weedeat</p>
                        <p className='plans-card-top-m-text'>Blow off / Cleanup</p>
                        <p className='plans-card-top-m-text'>Off Season Debris Removal</p>
                        <p className='plans-card-top-m-text'>Off Season Tree Cleanup</p>
                        <p className='plans-card-top-m-text'>Shrub / Small Tree Maintenance</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            <div className='plans-btm-x-container'>
                    <div className='plans-card-y-container'>
                        <div className='plans-card-top-container'>
                            <h2 className='plans-card-title'>Bronze Pressure Wash</h2>
                            <div className='plans-card-price-container'>
                                <span className='plans-card-price-sign'>$</span>
                                <span className='plans-card-price'>200</span>
                            </div>
                                <p className='plans-card-top-sm-text'>Every Month</p>
                                <p className='plans-card-top-m-text'>A gentle cleanse of your<br/>walk ways and patio/porch</p>
                                <a href='/contacts'>
                                    <button className='plans-btn' id='pw_btn'>Contact Us!</button>
                                </a>
                        </div>
                        <div className='plans-card-btm-container'>
                            <br/>
                            <p className='plans-card-top-m-text'>Bronze Package Pressure Washing</p>
                            <p className='plans-card-top-m-text'>Gentle Chemical Application</p>
                            <p className='plans-card-top-m-text'>Front Porch Cleaning</p>
                            <p className='plans-card-top-m-text'>Walkways from Driveway to Front Porch</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Plans;