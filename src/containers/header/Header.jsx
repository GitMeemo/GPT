import React from 'react'
import './header.css';
import people from '../../assets/assets/people.png';
import ai from '../../assets/assets/ai.png';
const Header = () => {
  return (
    <div className="Header Section_Padding" id="home">

      <div className="Header-Content">

        <h1 className="Gradient_Text">Let’s Build Something amazing with GPT OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="Header-Content_Input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="Header-Content_People">
          <img src={people} alt="not found" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="Header-Image">
        <img src={ai} alt="not found" />
      </div>

    </div>
  )
}

export default Header
