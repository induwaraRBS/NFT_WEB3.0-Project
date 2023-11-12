import React from 'react'
import './header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'
const Header = () => {
  return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt="Logo" />
            </div>
            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} alt="searchIcon"/>
                </div>
                <input className='searchInput' placeholder='Collection, item or user ...'/>
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
            </div>
            <div className='headerAction'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitch} alt="Theme Switch" />
                </div>
                <div className='loginButton'>
                    GetIn
                </div>
            </div>
        </div>
 
  )
}

export default Header
