
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const links = <>
        <li><NavLink to='/' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Home</NavLink></li>
        <li><NavLink to='/register' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Register</NavLink></li>
        <li><NavLink to='/login' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Login</NavLink></li>
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
            <div className="navbar bg-base-100 z-100 bg-gradient-to-r from-indigo-200 cyan-500 via-purple-200 to-pink-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl hidden lg:block">Modern Hotel Booking</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
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
            <Toaster />
        </div>
    );
};

export default Navbar;