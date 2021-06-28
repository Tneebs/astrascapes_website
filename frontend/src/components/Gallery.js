import React, { useState, useEffect } from 'react';
import Grid from '../components/Grid'

import Tulip from '../images/tulip.webp'
import Garden from '../images/garden.webp'

const Gallery = () => {
    const [open, setOpen] = useState(false)

    let pics = [Tulip, Garden, 'joe', 'doe', 'hello', 'world', 'joe', 'doe', '123']

    const handleOpen = () => {
        setOpen(true)
        console.log('hello')
        console.log(open)
    }

    return (
        <div className='container-gallery'>
            <span className='gallery'> Gallery </span>

            <div className='container-grid'>
                {pics.map(pic => <Grid key={pic.id} pic={pic} open={open} handleOpen={handleOpen} />)}
            </div>
        </div>
    )
}

export default Gallery;