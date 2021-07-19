import React from 'react'

const BookingModal = (props) => {
    if (!props.open) return null

    return (
        <div className='modal-card'>
            <div className='back-button-container'>
                <span className='modal-back-button' onClick={props.handleClose}> {'<'} Back </span>
            </div>
            <span className='modal-title'> {props.selectedCard.title} </span>
            <p className='modal-des'> {props.selectedCard.des} </p>
            <span className='modal-time-price'> {props.selectedCard.price} </span>
            <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Contact Us! </span> </a>
            <img src={props.selectedCard.src} className='book-modal-pic' alt='Modal' />
            
            <div className='modal-bottom-half'>
                <span> {props.selectedCard.modalDes} </span>
                <p className='modal-book-online'> Book Online </p>
                <span> {props.selectedCard.title} </span>
                <span> {props.selectedCard.price} </span>
                <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Contact Us! </span> </a>
                <div className='modal-breaks'></div>
                <p className='modal-location'> Location {'&'} Contact Details </p>
                <span>
                    Phone: (405) 301-7271
                    <br />
                    Email: steve.penwell@outlook.com
                    <br />
                    Location: Client's Place
                </span>
            </div>
        </div>
    )
}

export default BookingModal