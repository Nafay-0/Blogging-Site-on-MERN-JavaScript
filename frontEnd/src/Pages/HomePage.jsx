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
import Pagination from  'react-js-pagination'

function HomePage() {

    const [currentPage, setCurrentPage] = useState(1);
    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState('');
    const {loading,blogs,errors,BlogCount,resPerPage} = useSelector(state => state.blog);
    useEffect(() => {
        console.log("Called");
        dispatch(getBlogs(currentPage));
    }, [dispatch,currentPage]);
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

    // console.log(BlogCount);
    // console.log(resPerPage);
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

            <div className='flex mt-10 justify-center content-center'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={BlogCount?BlogCount:0}
                    onChange = {setCurrentPageNo}
                    nextPageText='Next'
                    prevPageText='Previous'
                    firstPageText='First'
                    lastPageText='Last'
                    // itemClass='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    // linkClass='page-link'
                />
            </div>
        </Fragment >
    )
}
export default HomePage
