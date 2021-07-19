import React from 'react'

const BookingCard = (props) => {
 
    return (
        <div className='booking-cards'>
            <div className='booking-pic-container'>
                <img src={props.card.src} className='booking-pics' alt='Yard' />
            </div>
            
            <div className='booking-card-info'>
                <span className='booking-card-title' onClick={() => props.handleOpen(props.card)}> {props.card.title}  </span>
                <p className='booking-card-des'> {props.card.des} </p>
                <span className='booking-read-more' onClick={() => props.handleOpen(props.card)}>
                    Read More
                </span>

                <span> {props.card.price} </span>
                <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Contact Us! </span> </a>
            </div>
        </div>
    )
}

export default BookingCard
