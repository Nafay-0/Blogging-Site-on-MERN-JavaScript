import React from 'react'
import Header from '../Components/Home/header';
import BlogList from '../Components/Home/BlogList';
import Searchbar from '../Components/Home/searchbar';
import {blogList} from '../blogData';
function HomePage() {


    return (
        <div>
            <Header />
            <Searchbar />
            <BlogList blogs ={blogList}></BlogList>
        </div>
    )
}

export default HomePage
