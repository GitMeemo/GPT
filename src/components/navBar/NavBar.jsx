import React from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/assets/logoGPT.png';
import { useState } from 'react';


const Menu = () => {
  return (
    <>
      <p><a href="#Home">Home</a></p>
      <p><a href="#Wgpt">What is GPT</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}
const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar-Links">
        <div className="Navbar-Links-Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Navbar-Links_Container">
          <Menu />
        </div>
      </div>
      <div className="Navbar-Sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="Navbar-Menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="Navbar-Menu_Container scale-up-center">
            <div className="Navbar-Links">
              <Menu />
              <div className="Navbar-Menu_Container-Links-Sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar