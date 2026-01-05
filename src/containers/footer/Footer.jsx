import React from 'react'
import './footer.css';
import GPT3Logo from '../../assets/assets/logoGPT.png';
const Footer = () => {
  return (
    <div className='Footer Section_Padding'>
      <div className='Footer-Heading'>
        <h1 className='Gradient_Text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='Footer-Btn'>
        <p>Request Early Access</p>
      </div>

      <div className='Footer-Links'>
        <div className='Footer-Links_Logo'>
          <img src={GPT3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='Footer-Links_Div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='Footer-Links_Div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </div>

        <div className='Footer-Links_Div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>0309-7482142</p>
          <p>info@payme.net</p>
        </div>

      </div>

      <div className='Footer-CopyRight'>
        <p>© 2021 GPT. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer