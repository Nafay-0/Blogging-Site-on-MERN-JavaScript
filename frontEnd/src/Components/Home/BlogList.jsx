import React from 'react'
import BlogPage from '../../Pages/BlogPage'
import BlogItem from './BlogItem'
import './bloglist.css'
export default function BlogList({ blogs }) {
  return (
    <div className='blogList-wrap'>
        {blogs.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
        ))}
    </div>
  )
}
