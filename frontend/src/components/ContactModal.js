import React from 'react'

const ContactModal = (props) => {
    if (!props.open) return null
    if (!props.sent) return null

    let sentMessage = (
        <div className='modal-sent'>
            <div className='contact-modal-top'>
                <span onClick={props.onClose} className='close-x'> X </span>
            </div>
            <div className='contact-modal-bottom'>
                <p onClick={props.onClose}> Message Sent! </p>
            </div>
        </div>
    )

    let sentError = (
        <div className='modal-error'>
            <div className='contact-modal-top'>
                <span onClick={props.onClose} className='close-x'> X </span>
            </div>
            <div className='contact-modal-bottom'>
                <span> Error... Try again later. </span>
            </div>
        </div>
    )

    return (
        <div className='overlay'>
            <div className='modal-container'>
                {props.sent === true ? sentMessage : sentError}
            </div>
        </div>
    )
}

export default ContactModal