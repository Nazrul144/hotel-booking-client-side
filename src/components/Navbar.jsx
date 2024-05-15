
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleTheme = e => {
        console.log(e.target.value);
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }

    const links = <>

        <li className='font-manrope lg:text-red-600 font-bold text-xl'><NavLink to='/' className={({ isActive }) => isActive ? 'border-[1px] border-pink-400 rounded-lg bg-sky-300' : ""}>Home</NavLink></li>
        <li className='font-manrope lg:text-red-600 font-bold text-xl'><NavLink to='/rooms' className={({ isActive }) => isActive ? 'border-[1px] border-pink-400 rounded-lg bg-sky-300' : ""}>Rooms</NavLink></li>
        <li className='font-manrope lg:text-red-600 font-bold text-xl'><NavLink to='/myBooking' className={({ isActive }) => isActive ? 'border-[1px] border-pink-400 rounded-lg bg-sky-300' : ""}>My Bookings</NavLink></li>
        <li className='font-manrope lg:text-red-600 font-bold text-xl'><NavLink to='/contact' className={({ isActive }) => isActive ? 'border-[1px] border-pink-400 rounded-lg bg-sky-300' : ""}>Contact us</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('logged out successfully!')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div>
            <div className="navbar shadow-xl z-10  ">
            {/* shadow-lg fixed z-10 w-10/12 bg-sky-200  */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl hidden lg:block font-extrabold text-primary">HOLIDAY<span className='font-extrabold text-secondary'>HIVE</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div>
                </div>
                <div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onClick={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onMouseEnter={() => setShowName(true)}
                                onMouseLeave={() => setShowName(false)}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            {showName && <span className="tooltip tooltip-open tooltip-bottom" data-tip={user?.displayName} ></span>}
                            {/* <span className='hidden lg:inline' >{user?.email}</span> */}
                            <a onClick={handleLogOut} className="btn btn-info font-bold text-lg">Logout</a>

                        </> :
                            <Link to='/login'><button className='rounded-lg text-lg bg-slate-300 p-2 font-bold btn btn-info'>Login</button></Link>
                    }

                </div>
            </div>
            <Toaster position="top-right"
                reverseOrder={false} />
        </div>
    );
};

export default Navbar;