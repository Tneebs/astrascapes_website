import React from 'react'

const GalleryModal = (props) => {
    if (!props.open) return null

    return (
        <div className='overlay'>
            <div className='modal-container'>
                <div className='close-button'>
                    <span onClick={props.handleClose} className='close-x'> X </span>
                </div>

                <img className='modal-pic' src={props.selectedPic} alt='pic' />

                <div className='modal-pics-container'>
                    {props.pics.map(pic => <img src={pic} className='modal-all-pics' onClick={(e) => props.modalClick(e)} alt='GalleryModal' />)}
                </div>
            </div>
        </div>
    )
}

export default GalleryModal