import React from 'react'
import './feature.css';

const Feature = ({ title, text }) => {

  return (
    <div className="Features-Container_Feature">
      <div className="Features-Container_Feature-Title">

        <div>
          <h1>{title}</h1>
        </div>
        </div>

        <div className="Features-Container_Feature-Text">
          <p>{text}</p>
        </div>

      
    </div>
  )
}

export default Feature