import React from 'react';
import Sight from '../images/sight_consultation.jpg';
import Bronze_LC from '../images/bronze_package_lawn.jpg';
import Silver_LC from '../images/silver_package_lawn.jpg';
import Gold_LC from '../images/gold_package_lawn.jpg';
import Bronze_PW from '../images/bronze_package_pw.jpg';

const Booking = () => {
    return(
        <div className='booking-container'>
            <p className='booking-title'>Our Services</p>
            <div className='booking-cards'>
                <img src={Sight} className='booking-pics' alt='Yard' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> Sight Consultation </span>
                    <p>
                        A walk around to assess what needs are wanting to be met.
                    </p>
                    <span> Read More </span>
                    <p> 15 min </p>
                    <span> Free Consultation </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

            <div className='booking-cards'>
                <img src={Bronze_LC} className='booking-pics' alt='Lawnmower' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> Bronze Package Lawn Care </span>
                    <p>
                        Bronze Package Lawn Care, Cut, Edge, <br /> Weedeat, and Blow off/Clean-up.
                    </p>
                    <span> Read More </span>
                    <p> 15 min </p>
                    <span> $40 </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

            <div className='booking-cards'>
                <img src={Silver_LC} className='booking-pics' alt='Sliver-Handshaking' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> Silver Package Lawn Care </span>
                    <p>
                        Weekly Lawn maintenance including Bronze Package perks
                    </p>
                    <span> Read More </span>
                    <p> 30 min </p>
                    <span> $40 </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

            <div className='booking-cards'>
                <img src={Gold_LC} className='booking-pics' alt='Gold-Handshaking' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> Gold Package Lawn Care </span>
                    <p>
                        Lawn Maintenance to the extreme; Cut, Edge, <br /> Weedeat, Blow off and More
                    </p>
                    <span> Read More </span>
                    <p> 30 min </p>
                    <span> $160 </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

            <div className='booking-cards'>
                <img src={Bronze_PW} className='booking-pics' alt='Power Washing' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> Bronze Package Pressure Washing </span>
                    <p>
                        A gentle cleanse of your Walk ways and Front porch.
                    </p>
                    <span> Read More </span>
                    <p> 1 hr </p>
                    <span> $200 </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

        </div>
    )
}

export default Booking