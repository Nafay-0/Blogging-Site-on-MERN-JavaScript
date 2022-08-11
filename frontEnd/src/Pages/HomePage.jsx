import React from 'react'
import Header from '../Components/Home/header';
import BlogList from '../Components/Home/BlogList';
import Searchbar from '../Components/Home/searchbar';
import EmptyList from '../Components/Common/emptylist';
import { blogList } from '../blogData';
import { useState, useEffect } from 'react';
function HomePage() {


    const [blogsList, setBlogsList] = React.useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };


    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogsList(filteredBlogs);
    };

    const handleClearSearch = () => {
        setBlogsList(blogList);
        setSearchKey('');
    };
    return (
        <div>
            <Header />
            <Searchbar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
                {!blogsList.length ? <EmptyList /> : <BlogList blogs={blogsList} />}
        </div >
    )
}

export default HomePage
