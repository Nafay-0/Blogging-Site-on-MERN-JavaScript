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
import {FilterByCategory} from '../Actions/blogActions';

function HomePage() {

    const [currentPage, setCurrentPage] = useState(1);
    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState('');
    const {loading,blogs,errors,BlogCount,resPerPage} = useSelector(state => state.blog);
    
    useEffect(() => {
        
        dispatch(getBlogs(currentPage));
    }, [dispatch,currentPage]);

    useEffect(() => {
        if(searchKey){
            dispatch(FilterByCategory(searchKey));
        }
        else{
            dispatch(getBlogs(currentPage));
        }
        
    } , [searchKey,dispatch]);

    const handleClearSearch = () => {
        setSearchKey('');
    };
    const handleSearchBar = (e) => {
        e.preventDefault();
        setSearchKey(e.target.value);
    };
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
                (blogs.length) ? <BlogList blogs={blogs} /> : <EmptyList />
                
            )}
            <div className='flex my-5 justify-center content-center'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={BlogCount? BlogCount : 0}
                    onChange = {setCurrentPageNo}
                    nextPageText='Next'
                    prevPageText='Previous'
                    firstPageText='First'
                    lastPageText='Last'
                    itemClass='page-item'
                    linkClass='page-link'
                />
            </div>
        </Fragment >
    )
}
export default HomePage
