import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaImages, FaUserEdit } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../provider/firebaseProvider/firebase.config';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth(app);

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.username.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


          //Validation Check:
        if(password.length < 6){
            toast.error('Password should be at least 6 character or long!');
          
        }
       else if(!/[A-z]/.test(password)){
            toast.error('Make a strong password with various character');
           
        }
        
        createUser(email, password)

               //Creating user:
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log('user from user in 70  number line',user)
           
            
            //Update profile:
            updateProfile(result.user,{    
            displayName: name,
            photoURL:photo
            
            })
            .then(()=> console.log('Profile Updated!'))
            .catch(error => {
                console.log(error)
            })




        
        })
        .catch(error => {
            console.error(error)
           
        })
    }

    return (
        <div>
            <Helmet>
                <title>Hotel-Booking | Register</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 mt-44 lg:mt-8 mx-auto shadow-xl">
                <h1 className="text-2xl font-bold text-center">Register Now!</h1>


                <form onSubmit={handleRegister} data-aos-easing="zoom-in" data-aos-duration='2000' noValidate="" action="" className="space-y-6  animate__animated animate__zoomIn">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600 font-semibold">Username</label>
                        <div className='relative'>
                            <input type="text" name="username" placeholder="Username" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-[1px] border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <FaUserEdit className='text-xl' />
                            </div>
                        </div>
                        <label htmlFor="url" className="block dark:text-gray-600 font-semibold">Photo URL</label>
                        <div className='relative'>
                            <input type="text" name="photo" placeholder="Photo URL" required className="w-full px-8 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-[1px] border-gray-800" />
                            <div className='absolute top-4 left-2'>
                                <FaImages className='text-xl' />
                            </div>
                        </div>

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

                    <button className="block w-full p-3 text-center dark:text-gray-50 dark:bg-violet-600 font-bold rounded-lg bg-[tomato]">Register</button>
                </form>
                <div className="errorDiv">
                 
                </div>
                <p className="text-xl text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800 font-bold text-blue-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;