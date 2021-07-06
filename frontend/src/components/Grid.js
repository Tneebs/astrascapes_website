import React from 'react'

const Grid = (props) => {
    return (
        <div className='grid'>
            <img className='grid-pic' src={props.pic} alt={props.pic} onClick={(e) => props.handleOpen(e)} />
        </div>
    )
}

export default Grid