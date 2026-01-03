import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js';

const Blog = () => {
  return (
    <div className='Blog Section_Padding' id='blog'>

      <div className='Blog-Heading'>
        <h1 className='Gradient_Text'> A lot is happening,We are blogging about it.</h1>
      </div>

      <div className='Blog-Container'>

        <div className='Blog-Container_GroupA'>
          <Article imgURL={blog01} date="Sep 26, 2021" title="GPT and Open  AI is the future. Let us exlore how it is?" />
        </div>

        <div className='Blog-Container_GroupB'>
          <Article imgURL={blog02} date="Sep 26, 2022" title="GPT and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog03} date="Sep 12, 2023" title="GPT and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog04} date="Nov 02, 2022" title="GPT and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog05} date="Jan 18, 2024" title="GPT and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog