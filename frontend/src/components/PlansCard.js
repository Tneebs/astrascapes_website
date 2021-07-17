import React from 'react'

const PlansCard = (props) => {
    return (
        <div className='plans-card'>
            <div className='plans-card-top'>
                <p className='plans-card-title'> {props.card.title} </p>
                <span className='plans-card-price'> {props.card.price} </span>
                <p> {props.card.every} </p>
                <span className='plans-card-package'> {props.card.package} </span>
                <p> {props.card.valid} </p>
                <a href='/contacts' className='plans-contact'> Contact Us! </a>
            </div>

            <div className='plans-card-bottom'>
                {props.card.work.map(w => <p> {w} </p>)}
            </div>
        </div>
    )
}




export default PlansCard