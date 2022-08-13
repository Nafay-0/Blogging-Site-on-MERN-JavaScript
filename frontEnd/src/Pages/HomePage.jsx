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
function HomePage() {

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

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Called");
        dispatch(getBlogs());
        console.log(blogs);
    } ,[dispatch])
    
    const {loading,blogs,errors,blogCount} = useSelector(state => state.blog);
    const [blogsList, setBlogsList] = React.useState(blogs);
    const [searchKey, setSearchKey] = useState('');
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };
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
                (blogsList.length > 0) ? <BlogList blogs={blogsList} /> : <EmptyList />
                
            )}
        </Fragment >
    )
}
export default HomePage
