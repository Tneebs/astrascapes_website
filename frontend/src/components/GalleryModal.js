import React from 'react'

import Grid from './Grid'

const GalleryModal = (props) => {
    if (!props.open) return null

    return (
        <div className='overlay'>
            <div className='modal-container'>
                <div className='close-button'>
                    <span onClick={props.handleClose}> X </span>
                </div>
                <img className='modal-pic' src={props.selectedPic} alt='pic' />
                <div>
                    {props.pics.map(pic => <img src={pic} className='test' onClick={(e) => props.modalClick(e)} />)}
                </div>
            </div>
        </div>
    )
}

export default GalleryModal