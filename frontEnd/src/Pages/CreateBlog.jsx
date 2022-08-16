import React from "react";

const CreateBlog = () => {
    return (
        <div className="bg-slate-900">
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
                                    <form>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="name-2"
                                                name="title"
                                                placeholder="Title"
                                                autoComplete="on"
                                            />
                                        </div>
                                        <div
                                            className="dropdown my-3"
                                            //style="margin-top: 1px;padding-top: 8px;"
                                        >
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                aria-expanded="false"
                                                data-bs-toggle="dropdown"
                                                type="button"
                                            >
                                                Category
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">
                                                    First Item
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Second Item
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Third Item
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    forth Item
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    5 Item
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    6 Item
                                                </a>
                                            </div>
                                            {/* display selected Category */}
                                            
                                        </div>
                                        <input
                                            className="form-control"
                                            type="file"
                                           // style="margin-top: 22px;"
                                        />
                                        <div className="mb-3"></div>
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control"
                                                id="message-2"
                                                name="content"
                                                rows="6"
                                                placeholder="Content"
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
