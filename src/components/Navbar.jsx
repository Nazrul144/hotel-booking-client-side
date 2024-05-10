
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Home</NavLink></li>
        <li><NavLink to='/register' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Register</NavLink></li>
        <li><NavLink to='/login' className={({isActive})=> isActive? 'border-[1px] border-pink-400 rounded-lg' : ""}>Login</NavLink></li>
    </>
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
                    <a className="btn btn-ghost text-xl">Modern Hotel Booking</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;