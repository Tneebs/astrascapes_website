import React, { useState } from 'react';

import BookingModal from './BookingModal'

import Sight from '../images/sight_consultation.jpg';
import Bronze_LC from '../images/bronze_package_lawn.jpg';
import Silver_LC from '../images/silver_package_lawn.jpg';
import Gold_LC from '../images/gold_package_lawn.jpg';
import AIO_PW from '../images/bronze_package_pw.jpg';
import AIO_WW from '../images/windowcleaning.jpeg';
import BookingCard from './BookingCard';

const Booking = () => {
    const [open, setOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    let bookCards = [
        {
            id: 1,
            src: Sight,
            title: 'Sight Consultation',
            des: 'A walk around to assess what needs are wanting to be met.',
            modalDes: 'Consultations are free! Book me to come over and give you a 1 on 1 with your yard, pressure washing, or in home cleaning needs and what we could do to make it better!',
            time: '15 min',
            price: 'Free Consultation'
        },
        {
            id: 2,
            src: Bronze_LC,
            title: 'Bronze Package Lawn Care',
            des: 'Bronze Package Lawn Care (Bi-Weekly) Mow, Edge, Weedeat, and Blow off/Clean-up.',
            modalDes: 'This service comes with a basic lawn care package. Mowing, Weedeating, Edging, and Blow off / Clean up. Other services can be discussed upon completion.',
            time: '15 min',
            price: '$40'
        },
        {
            id: 3,
            src: Silver_LC,
            title: 'Silver Package Lawn Care',
            des: 'Weekly Lawn maintenance including Bronze Package perks',
            time: '30 min',
            price: '$35'
        },
        {
            id: 4,
            src: Gold_LC,
            title: 'Gold Package Lawn Care',
            des: 'Lawn Maintenance to the extreme (Monthly w/ Contract); Mow, Edge, Weedeat, Blow off and More',
            time: '30 min',
            price: '$160'
        },
        {
            id: 5,
            src: AIO_PW,
            title: 'All-in-One Pressure Washing',
            des: 'A gentle cleanse of your walk ways and front patio/porch. Price is based on minimum, additional Pressure Washing work can be fulfilled with a consultation.',
            time: '1 hr',
            price: 'Minimum $149.99'
        },
        {
            id: 6,
            src: AIO_WW,
            title: 'All-in-One Window Washing',
            des: 'Gentle cleanse using the necessary tools to polish, clean, and protect windows. Price is based on minimum, additional Window Washing work can be fulfilled with a consultation.',
            time: 'TBD',
            price: 'Minimum $49.99'
        }
    ]


    const handleOpen = (card) => {
        setOpen(true)
        setSelectedCard(card)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedCard(null)
    }

    return(
        <div className='booking-container'>
            {open === false ? <p className='booking-title'> Our Services </p> : <> </>}

            {selectedCard === null ?
                bookCards.map(card => <BookingCard key={card.id} card={card} open={open} handleOpen={handleOpen} selectedCard={selectedCard} /> )
                :
                <BookingModal open={open} selectedCard={selectedCard} handleClose={handleClose} />}
        </div>
    )
}

export default Booking