import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { login, clearErrors } from '../Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Layout/loader';
import Alert from '../Components/Common/Alert';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user,isAuthenticated,error,loading } = useSelector(state => state.auth);
    const [showAlert, setShowAlert] = React.useState(false);
    useEffect(() => {
        if(isAuthenticated){
           // console.log('logged in');
            navigate('/');
        }
        if(error){
            console.log(error);
            setShowAlert(true);
            //dispatch(clearErrors());
        }
    },[isAuthenticated,error]);
    
    const [FormData, setFormData] = React.useState({
        email: '',
        password: '',
        remember: false
    });
    function HandleRememberCheckbox(e) {
        setFormData({
            ...FormData,
            remember: e.target.checked
        });
    }
    function HandleFormSubmit(e) {
        e.preventDefault();
        dispatch(login(FormData.email, FormData.password));
        setFormData({
            email: '',
            password: '',
            remember: false
        });
    }
    return (
        
        <div>
            {showAlert && <Alert message={error} />}
            {loading ? <Loader /> : (
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={HandleFormSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={FormData.email}
                                        id="email"
                                        name='email'
                                        onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        value={FormData.password}
                                        id="password"
                                        name='password'
                                        onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="remember"
                                            checked={FormData.remember}
                                            onChange={HandleRememberCheckbox}
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="/"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >Forgot password?</a
                                    >
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign in
                                </button>
                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>
                                <Link
                                    className="px-7 py-3 bg-slate-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                    to='/SignUp'
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign Up Now
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            )}
        </div>
    );
}

export default LoginPage;
