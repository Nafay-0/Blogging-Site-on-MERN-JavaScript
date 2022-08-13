import React, { Fragment } from 'react'
import Header from '../Components/Home/header';
import BlogList from '../Components/Home/BlogList';
import Searchbar from '../Components/Home/searchbar';
import EmptyList from '../Components/Common/emptylist';
import Loader from '../Components/Layout/loader';
import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getBlogs} from '../Actions/blogActions';
import MetaData from '../Components/Layout/metaData'
import { set } from 'mongoose';
function HomePage() {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState('');
    const {loading,blogs,errors,blogCount} = useSelector(state => state.blog);
    useEffect(() => {
        console.log("Called");
        dispatch(getBlogs());
    }, [dispatch]);
    //setBlogsList(blogs);
    
    

    // for Search bar state
    const handleSearchResults = () => {
        const allBlogs = blogs;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        //setBlogsList(filteredBlogs);
    };
    
    const handleClearSearch = () => {
        // setBlogsList(blogs);
        // for state set blog list to original list
        setSearchKey('');
    };
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };
    ////////////////////////////////

    console.log('Rendering HomePage');
    return (
        <Fragment>
                <MetaData title="Home" />
            
            <Header />
            <Searchbar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {loading ? <Loader /> : (
                (blogs.length > 0) ? <BlogList blogs={blogs} /> : <EmptyList />
                
            )}
        </Fragment >
    )
}
export default HomePage
