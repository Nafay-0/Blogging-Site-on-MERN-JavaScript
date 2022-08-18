import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register,clearErrors } from '../Actions/userActions';
import { useNavigate } from 'react-router-dom';



const SignUpPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user,isAuthenticated,errors,loading } = useSelector(state => state.auth);
    const [Profile, setProfile] = React.useState({
        email: '',
        password: '',
        username: '',
    });
    const [ProfilePicture, setProfilePicture] = React.useState(null);
    function handleProfilePicture(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setProfilePicture(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    React.useEffect(() => {
        //console.log("Checking if user is authenticated");
        if(isAuthenticated){
         //   console.log('registered');
            navigate('/');
        }
        if(errors){
            console.log(errors);
            dispatch(clearErrors());
        }
    },[isAuthenticated,errors,dispatch,navigate]);
    

    function HandleFormSubmit(e) {
        e.preventDefault();
        console.log(Profile);
        console.log(ProfilePicture);
        const formData = new FormData();
        formData.set('email', Profile.email);
        formData.set('password', Profile.password);
        formData.set('name', Profile.username);
        formData.set('ProfilePicture', ProfilePicture);
        console.log("Before dispatch",formData.email);
        
        dispatch(register(formData));
    }

    return (
        <div>
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
                                        type="name"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Enter your username"
                                        value={Profile.name}
                                        id="username"
                                        name='username'
                                        onChange={(e) => setProfile({ ...Profile, username: e.target.value })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        value={Profile.email}
                                        id="email"
                                        name='email'
                                        onChange={(e) => setProfile({ ...Profile, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        value={Profile.password}
                                        id="password"
                                        name='password'
                                        onChange={(e) => setProfile({ ...Profile, password: e.target.value })}
                                    />
                                </div>
{/*                                 For adding profile picture */}
                                <div className='text-xl'>
                                    Profile Picture
                                    <input
                                        type="file"
                                        className="form-control  block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Profile picture"
                                        value={Profile.profilePicture}
                                        id="ProfilePicture"
                                        name='ProfilePicture'
                                        accept='image/*'
                                        onChange={handleProfilePicture}
                                        
                                    />
                                    
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block mt-8 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={HandleFormSubmit}
                                    
                                >
                                    Register
                                </button>
                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>

                                <Link
                                    className="px-7 py-3 bg-slate-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    to="/login"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUpPage;
