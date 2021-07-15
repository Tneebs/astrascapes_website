import { useState } from 'react'

import emailjs from 'emailjs-com';

import GoogleMap from '../images/GoogleMap.png';
import ContactModal from './ContactModal';

const Contact = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [sent, setSent] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setSent(true)
                console.log(name, subject, email, message, 'Thank you!')
            }, (error) => {
                setSent(false);
                console.log(error.text);
            });
    }

    const onClose = () => {
        setOpen(false)
    }


    return (
        <div className='container'>
            <div className='left'>
                <span className='lets-talk'> Let's Talk </span>
                <p> Steve Penwell </p>
                <p> Tel:  405-301-7271 <br /> Call or Text any time! </p>
                <p> If you don't care for that and just want a basic inquiry, please fill out the form below. </p>
                <form className="contact-form" onSubmit={e => handleSubmit(e)}>

                    <input type="hidden" name="contact_number" />

                    <input type="text" name="name" className='email-field' onChange={e => setName(e.target.value)} placeholder='Name*'  />

                    <input type="email" name="email" className='email-field' onChange={e => setEmail(e.target.value)} placeholder='Email*'  />

                    <input type="text" name="subject" className='email-field' onChange={e => setSubject(e.target.value)} placeholder='Subject'  />

                    <textarea name="message" className='email-mess' onChange={e => setMessage(e.target.value)} placeholder='Message'  />

                    <div className='button-send'>
                        <button className='email-send' onClick={() => setOpen(true)}> Send </button>
                    </div>
                </form>
            </div>

            <div className='right'>
                <div className='map-container'>
                    <img src={GoogleMap} className='map' alt='GoogleMap' />
                </div>
            </div>

            <ContactModal open={open} sent={sent} onClose={onClose} />
        </div>
    )
}

export default Contact