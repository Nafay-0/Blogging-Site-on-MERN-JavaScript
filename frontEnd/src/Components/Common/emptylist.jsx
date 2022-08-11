import React from 'react';
import './emptylist.css';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <p className=' text-amber-900'>
      Category Not Found
    </p>
    <img src='/assets/images/notfound.gif' alt='empty' />
  </div>
);

export default EmptyList;