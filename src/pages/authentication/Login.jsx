import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import {useLocation, useNavigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../provider/firebaseProvider/firebase.config';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {signInUser} = useContext(AuthContext)
    const auth = getAuth(app);
    const location = useLocation()
    const navigate = useNavigate()

    //Handle email logged in:
    const handleLoggedIn = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('logged in successfully!')
            //Navigate after login:
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error)
        })

    }

    const googleProvider = new GoogleAuthProvider();
    //Google Login:
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div>
            <h1>This is login page</h1>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mt-44 lg:mt-8 mx-auto shadow-xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>


                <form onSubmit={handleLoggedIn} data-aos-easing="zoom-in" data-aos-duration='2000' noValidate="" action="" className="space-y-6  animate__animated animate__zoomIn">
                    <div className="space-y-1 text-sm">                     
                     
                        <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
                        <div className='relative'>
                            <input type="email" name="email" placeholder="Email" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-[1px] border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <IoMail className='text-xl' />
                            </div>
                        </div>

                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600 font-semibold"> Password</label>

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder=" Choose Password"
                                required
                                className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-[1px] border-gray-800" />
                            <div className='absolute top-4 right-3'>
                            <IoIosLock className=' right-80 lg:right-[340px] absolute text-xl'  />

                                <span onClick={() => setShowPassword(!showPassword)}>

                                    {showPassword ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />}
                                </span>

                            </div>
                            <div className='absolute top-4 left-2'>
                               
                            </div>
                        </div>

                    </div>

                    <button className="block w-full p-3 text-center dark:text-gray-50 dark:bg-violet-600 font-bold rounded-lg bg-[tomato]">Login</button>
                </form>
                <div className="errorDiv">
                 
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with google accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
               
                </div>

                <p className="text-xl text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800 font-bold text-blue-600">Login</Link>
                </p>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;