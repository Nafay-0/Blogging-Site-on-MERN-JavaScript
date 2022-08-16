import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addBlog} from '../Actions/blogActions';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    
    const navigate = useNavigate();
    const [blogData, setBlogData] = React.useState({
        title: "",
        content: "",
        category: "",
    });
    const [coverImage, setCoverImage] = React.useState(null);

    const dispatch = useDispatch();
    const {loading,blog,created} = useSelector(state => state.blogDetails);
    React.useEffect(() => {
        if(created){
            console.log("Created blog");
            navigate('/');
        }
    }, [created,navigate]);

    
    const {user} = useSelector(state => state.auth);
    
    
    const handleChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value,
        });
    }
    const handleImageChange = (e) => {
        console.log(e);
        setCoverImage(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blogData);
        console.log(coverImage);
        console.log(user);
        const formdata = new FormData(blogData);
        // formdata.set('title', blogData.title);
        // formdata.set('content', blogData.content);
        // formdata.set('category', blogData.category);
        // formdata.set('cover', coverImage);
        // formdata.set('Author', user.name);
        // console.log(formdata);
        // dispatch(addBlog(formdata));
    }
        
    return (
        <div className=" bg-slate-900">
            <section className="position-relative py-4 py-xl-5">
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card mb-5">
                                <div
                                    className="card-body p-sm-5 bg-slate-900"
                                    // style="background: var(--bs-gray-800);"
                                >
                                    <h2 className="text-center text-white text-5xl mb-4">
                                        Create a Blog
                                    </h2>
                                    <form onSubmit={handleSubmit} >
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="name-2"
                                                name="title"
                                                placeholder="Title"
                                                autoComplete="on"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div
                                            className="dropdown my-3"
                                            //style="margin-top: 1px;padding-top: 8px;"
                                        >
                                            <select
                                                className="btn btn-primary dropdown-toggle"
                                                aria-expanded="false"
                                                data-bs-toggle="dropdown"
                                                type="button"
                                                id = "category"
                                                name="category"
                                                value = {blogData.category}
                                                onChange = {handleChange}
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>
                                                <option value="technology">
                                                technology
                                                </option>
                                                <option value = "business">
                                                business
                                                </option>
                                                <option value="entertainment">
                                                entertainment
                                                </option>
                                                <option value = "sports">
                                                sports
                                                </option>
                                                <option value="health">
                                                health
                                                </option>
                                                <option value = "science">
                                                science
                                                </option>
                                            </select>
                                            
                                            
                                            
                                        </div>
                                        <div>
                                        <input
                                            className="form-control"
                                            type="file"
                                            accept='image/*'
                                            id="cover"
                                            name="cover"
                                            onChange={handleImageChange}

                                           // style="margin-top: 22px;"
                                        />
                                        </div>
                                        <div className="mb-3"></div>
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control"
                                                id="content"
                                                name="content"
                                                rows="6"
                                                placeholder="Content"
                                                autoComplete="on"
                                                value={blogData.content}
                                                onChange={handleChange}
                                                //style="padding-left: 10px;padding-bottom: 83px;"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary d-block w-100"
                                                type="submit"

                                            >
                                                Publish
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateBlog;
