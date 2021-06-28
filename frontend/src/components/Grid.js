import React from 'react'

const Grid = (props) => {
    return (
        <div className='grid'>
            <img className='grid-pic' src={props.pic} alt='gallery-pics' onClick={() => props.handleOpen()} />
        </div>
    )
}

export default Grid