import React from 'react';
import { useState, useEffect } from 'react';

import BackgroundSlideshow from 'react-background-slideshow';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import Logo from '../images/astrascapes-black.png';
import Garden from '../images/garden.webp';
import Walk from '../images/walkpath.webp';
import White from '../images/white-flower.webp';
import garden1 from '../images/gardening1.jpeg';
import garden2 from '../images/gardening2.jpeg';
import landscaping1 from '../images/landscaping1.jpg';
import landscaping2 from '../images/landscaping2.jpeg';
import landscaping3 from '../images/landscaping3.jpeg';




const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const ITEM_HEIGHT = 48;

    const options = [
        <a href='/' className='navlinks'> Home </a>,
        <a href='/services' className='navlinks'> Services </a>,
        <a href='/gallery' className='navlinks'> Gallery </a>,
        <a href='/contacts' className='navlinks'> Contact </a>,
        <a href='/booking' className='navlinks'> Book Online </a>,
        <a href='/plans' className='navlinks'> Plans {'&'} Pricing </a>
    ];

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const portrait = (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

    const landscape = (
        <>
            {options.map(option => option)}
        </>
    )

    return (
        <div className='header-container'>
            <div className='header-top'>

                <div className='header-logo'>
                    <a href='/' alt='AstraScapes, LLC.' className='header-logo-quote' >
                        <img src={Logo} className='logo' alt='Logo-blk' />
                        <span> All beautiful creations <br /> Start from the Root </span>
                    </a>
                </div>

                <div className='header-navlinks-container'>
                    {windowWidth < 1200 ? portrait : landscape}
                </div>
            </div>

            <div className='header-bottom'>
                <BackgroundSlideshow images={[Garden, White, garden1, Walk, garden2, landscaping1, landscaping2, landscaping3]} />
                <div className='header-quote'>
                    <span className='header-des'>
                        Beautify Your Outdoor
                        <span> {'&'} </span>
                        Indoor Space
                    </span>
                    <div className='header-break' />
                    <a href='/contacts' className='get-quote'> GET A QUOTE {'>'} </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
