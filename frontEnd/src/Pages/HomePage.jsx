import React from 'react'
import Header from '../Components/Home/header';
import BlogList from '../Components/Home/BlogList';
import Searchbar from '../Components/Home/searchbar';
import EmptyList from '../Components/Common/emptylist';
import loading from '../Components/Layout/loading';
import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getBlogs} from '../Actions/blogActions';
function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    } ,[dispatch])

    const {loading,blogs,errors,blogCount} = useSelector(state => state.blog);
    const [blogsList, setBlogsList] = React.useState(blogs);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };
    const handleSearchResults = () => {
        const allBlogs = blogs;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogsList(filteredBlogs);
    };
    
    const handleClearSearch = () => {
        setBlogsList(blogs);
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
