
import './BlogPage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EmptyList from '../Components/Common/emptylist';
import Chip from '../Components/Common/chip';
import { Link } from 'react-router-dom';
import { blogList } from '../blogData';

const Blog = (props) => {
  console.log(props);
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {props ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {props.blog.createdAt}</p>
            <h1>{props.blog.title}</h1>
            <div className='blog-subCategory'>
              {props.blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
              <h3 className='mt-4 ml-2 text-blue-600'>By : {props.blog.authorName}</h3>
            </div>
          </header>
          <img src={props.blog.cover} alt='cover' />
          <p className='blog-desc'>{props.blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;