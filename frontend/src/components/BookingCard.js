import React from 'react'

const BookingCard = (props) => {
    // let content = (
    //     <div className='booking-cards'>
    //         <img src={props.card.src} className='booking-pics' alt='Yard' />
    //         <div className='booking-card-des'>
    //             <span className='booking-card-title' onClick={() => props.handleOpen(props.card)}> {props.card.title}  </span>
    //             <p> {props.card.des} </p>
    //             <span onClick={() => props.handleOpen(props.card)}> Read More </span>
    //             <p> {props.card.time} </p>
    //             <span> {props.card.price} </span>
    //             <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>
    //         </div>
    //     </div>
    // )

    // let bModal = (
    //     <div className='overlay-booking'>

    //         <div className='modal-card'>

    //             <p className='modal-back-button' onClick={props.handleClose}> {'<'} Back </p>

    //             <span className='modal-title'> {props.selectedCard.title} </span>

    //             <p> {props.selectedCard.des} </p>

    //             <span> {props.selectedCard.time} | {props.selectedCard.price} </span>
                
    //             <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>

    //             <img src={props.selectedCard.src} className='book-modal-pic' alt='Modal Picture' />

    //             <span> {props.selectedCard.modalDes} </span>

    //             <p> Book Online </p>

    //             <span> {props.selectedCard.title} </span>
    //             <span> {props.selectedCard.time} | {props.selectedCard.price} </span>

    //             <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Book Now </span> </a>

    //             <div className='modal-breaks'></div>

    //             <p> Location {'&'} Contact Details </p>
    //             <p>
    //                 4053017271
    //                 <br />
    //                 steve.penwell@outlook.com
    //                 <br />
    //                 Location: Client's Place
    //             </p>
    //         </div>

    //     </div>
    // )



    return (
        <div className='booking-cards'>
            <img src={props.card.src} className='booking-pics' alt='Yard' />
            <div className='booking-card-info'>
                <span className='booking-card-title' onClick={() => props.handleOpen(props.card)}> {props.card.title}  </span>
                <p className='booking-card-des'> {props.card.des} </p>
                <span className='booking-read-more' onClick={() => props.handleOpen(props.card)}>
                    Read More
                </span>
                <p> {props.card.time} </p>
                <span> {props.card.price} </span>
                <a href='/contacts' className='book-now-button' alt='Contact Page'> <span> Contact Us! </span> </a>
            </div>
        </div>
    )
}

export default BookingCard
