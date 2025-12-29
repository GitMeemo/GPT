import React from 'react'
import './brand.css';
import { google, atlassian, shopify, dropbox, slack } from './imports';
const Brand = () => {
    return (
        <div className="Brand Section_Padding">

            <div>
                <img src={google} alt="google" />
            </div>

            <div>
                <img src={slack} alt="slack" />
            </div>

            <div>
                <img src={atlassian} alt="atlassian" />
            </div>

            <div>
                <img src={shopify} alt="shopify" />
            </div>

            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
        </div>
    )
}

export default Brand