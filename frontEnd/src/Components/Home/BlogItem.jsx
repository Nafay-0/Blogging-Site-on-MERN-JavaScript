import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../Common/chip';
import './blogItem.css';

const BlogItem = ({
  blog: {
    content,
    title,
    createdAt,
    Author,
    authorAvatar,
    cover,
    category,
    _id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src= {'/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg'} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p  className='blogItem-desc'>{content}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={'/assets/images/author.jpg'} alt='avatar' />
          <div>
            <h6>{Author}</h6>
            <p>{new Date(createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${_id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;