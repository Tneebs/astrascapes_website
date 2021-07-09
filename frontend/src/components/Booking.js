import React, { useState, useEffect } from 'react';

import BookingModal from './BookingModal'

import Sight from '../images/sight_consultation.jpg';
import Bronze_LC from '../images/bronze_package_lawn.jpg';
import Silver_LC from '../images/silver_package_lawn.jpg';
import Gold_LC from '../images/gold_package_lawn.jpg';
import Bronze_PW from '../images/bronze_package_pw.jpg';

const Booking = () => {
    const [open, setOpen] = useState(false)


    let bookCards = [
        {
            src: Sight,
            title: 'Sight Consultation',
            des: 'A walk around to assess what needs are wanting to be met.',
            time: '15 min',
            price: 'Free Consultation'
        },
        {
            src: Bronze_LC,
            title: 'Bronze Package Lawn Care',
            des: 'Bronze Package Lawn Care, Cut, Edge, Weedeat, and Blow off/Clean-up.',
            time: '15 min',
            price: '$40'
        },
        {
            src: Silver_LC,
            title: 'Silver Package Lawn Care',
            des: 'Weekly Lawn maintenance including Bronze Package perks',
            time: '30 min',
            price: '$40'
        },
        {
            src: Gold_LC,
            title: 'Gold Package Lawn Care',
            des: 'Lawn Maintenance to the extreme; Cut, Edge, Weedeat, Blow off and More',
            time: '30 min',
            price: '$160'
        },
        {
            src: Bronze_PW,
            title: 'Bronze Package Pressure Washing',
            des: 'A gentle cleanse of your Walk ways and Front porch.',
            time: '1 hr',
            price: '$200'
        }
    ]





    return(
        <div className='booking-container'>
            <p className='booking-title'>Our Services</p>
            <div className='booking-cards'>
                <img src={bookCards[0].src} className='booking-pics' alt='Yard' />
                <div className='booking-card-des'>
                    <span className='booking-card-title'> {bookCards[0].title}  </span>
                    <p>
                        {bookCards[0].des}
                    </p>
                    <span> Read More </span>
                    <p> {bookCards[0].time} </p>
                    <span> {bookCards[0].price} </span>
                    <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
                </div>
            </div>

            <div className='booking-cards'>
                <img src={bookCards[1].src} className='booking-pics' alt='Lawnmower' />
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
                <img src={bookCards[2].src} className='booking-pics' alt='Sliver-Handshaking' />
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
                <img src={bookCards[3].src} className='booking-pics' alt='Gold-Handshaking' />
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
                <img src={bookCards[4].src} className='booking-pics' alt='Power Washing' />
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
            
            <BookingModal />
        </div>
    )
}

export default Booking