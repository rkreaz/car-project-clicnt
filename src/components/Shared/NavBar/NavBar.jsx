import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/icons/logo.svg';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out Success Full');
            }).catch((error) => {
                console.log(error);
            });
    }

    const Links = <>
        <NavLink className={"navMenu"} to='/'>Home</NavLink>

        <NavLink className={"navMenu"} to='/register'>Register</NavLink>

    </>



    return (
        <div>
            <div className="navbar mt-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <img className="" src={logo} alt="" />
                            <h1 className="engagement-regular text-4xl ml-2 text-[#fff]">Coffee Project</h1>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                    {
            user?.email ?
                <>
                    <NavLink className={"navMenu"} to='/booking'>My Booking</NavLink>
                        <div className="dropdown">
                            <div tabIndex={0} role="button">
                                <div>
                                    <img width={40} className="rounded-full" src={user.photoURL} />
                                </div>
                            </div>
                            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 shadow bg-[#ddc9c5] text-primary-content  mt-2">
                                <div className="card-body text-center">
                                    <img className="w-16 h-16 rounded-full mx-auto" src={user?.photoURL} />
                                    <h3 className="text-[#fff] text-xl font-semibold">{user.displayName}</h3>
                                    <p className="text-[#fff] text-base font-semibold">{user.email}</p>
                                    <h2 onClick={handleLogOut} className="bg-[#FF3811] text-[#fff] hover:bg-[#c94646] text-lg font-semibold rounded-lg py-1 ">Log Out</h2>
                                </div>
                            </div>
                        </div>
                </>
                : <NavLink className={"navMenu"} to='/login'>Login</NavLink>
        }
                </div>
                <div className="navbar-end flex gap-4">

                    <HiOutlineShoppingBag className="text-2xl" />
                    <CiSearch className="text-2xl" />

                    <button className="btn btn-outline text-[#FF3811]  hover:bg-[#FF3811]">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;