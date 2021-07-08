import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

import Grid from '../components/Grid'
import Modal from '../components/Modal'

import Tulip from '../images/tulip.webp'
import Garden from '../images/garden.webp'
import Tree from '../images/tree-pot.webp'
import Watering from '../images/watering-plants.webp'
import Purple from '../images/purple-flower.webp'
import White from '../images/white-flower.webp'
import Yellow from '../images/yellow-flower.webp'
import Blue from '../images/blue-flower.webp'
import Walkpath from '../images/walkpath.webp'


const Gallery = () => {
    const [open, setOpen] = useState(false)
    const [selectedPic, setSelectedPic] = useState(null)

    let pics = [Tulip, Garden, Tree, Watering, Purple, White, Yellow, Blue, Walkpath]

    const handleOpen = (e) => {
        setOpen(true)
        setSelectedPic(e.target.alt)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const modalClick = (e) => {
        setSelectedPic(e.target.src)
        console.log(e.target)
    }

    return (
        <div className='container-gallery'>
            <span className='gallery'> Gallery </span>

            <div className='container-grid'>
                {pics.map(pic => <Grid pic={pic} open={open} handleOpen={handleOpen} />)}
            </div>

            <Modal open={open} pics={pics} selectedPic={selectedPic} handleClose={handleClose} modalClick={modalClick}/>
        </div>
    )
}

export default Gallery;