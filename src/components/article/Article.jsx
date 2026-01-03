import React from 'react';
import './article.css';

const Article = ({ imgURL, date, title }) => {
    return (
        <div className='Blog-Container_Article'>
            <div className='Blog-Container_Article-Image'>
                <img src={imgURL} alt="blog Image" />
            </div>

            <div className='Blog-Container_Article-Content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article