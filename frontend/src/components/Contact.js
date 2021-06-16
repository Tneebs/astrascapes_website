import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
    //         .then((result) => {
    //             console.log(result.text);
    //             e.target.reset();
    //             console.log(name, subject, email, message, 'Thank you!')
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

    return (
        <div className='container'>
            <div className='left'>
                <span className='lets-talk'> Let's Talk </span>
                <br />
                <span> Steve Penwell </span>
                <p> Tel:  405-301-7271 <br /> Call or Text any time! </p>
                <p> If you don't care for that and just want a basic inquiry,
                    <br /> please fill out the form below.
                </p>

                <form className="contact-form">
                    <input type="hidden" name="contact_number" />
                    
                    <input type="text" name="name" className='email-field' onChange={e => setName(e.target.value)} placeholder='Name*' required />

                    <input type="email" name="email" className='email-field' onChange={e => setEmail(e.target.value)} placeholder='Email*' required />

                    <input type="text" name="subject" className='email-field' onChange={e => setSubject(e.target.value)} placeholder='Subject' required />

                    <textarea name="message" className='email-mess' onChange={e => setMessage(e.target.value)} placeholder='Message' required />

                    <div className='button-send'>
                        <button type="submit" className='email-send'> Send </button>
                    </div>
                </form>
            </div>

            <div className='right'>
                <h1> RIGHT </h1>
            </div>
        </div>
    )
}

export default Contact