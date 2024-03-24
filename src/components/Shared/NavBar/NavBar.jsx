import { NavLink } from "react-router-dom";
import logo from '../../../assets/icons/logo.svg';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import './NavBar.css'

const NavBar = () => {
    const Links = <>
        <NavLink className={"navMenu"} to='/'>Home</NavLink>
        {/* <NavLink to='/products'>Products</NavLink> */}
        <NavLink className={"navMenu"} to='/register'>Register</NavLink>
        <NavLink className={"navMenu"} to='/login'>Login</NavLink>
        {/* <NavLink className={"navMenu"} to='/addProduct'>Add Product</NavLink> */}
        {/* <NavLink className={"navMenu"} to='/users'>Users</NavLink> */}
        {/* <NavLink className={"navMenu"} to='/updateProduct'>Update Product</NavLink> */}
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