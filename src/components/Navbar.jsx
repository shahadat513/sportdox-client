import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);

    return (
        <div className="bg-blue-800 text-black md:text-white">
            <div className="navbar w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Home</a></li></NavLink>
                        <NavLink to="/allEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>All Sports Equipment</a></li></NavLink>
                        <NavLink to="/addEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Add Equipment</a></li></NavLink>
                        <NavLink to="/myEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>My Equipment List</a></li></NavLink>
                        <NavLink to="/about"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>About Us</a></li></NavLink>
                        <NavLink to="/contact"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Contact</a></li></NavLink>
                        <NavLink to="/support"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Support</a></li></NavLink>
                        </ul>
                    </div>
                    <NavLink to="/"><a className="btn btn-ghost text-xl">SPORT-DOX</a></NavLink>
                </div>
                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Home</a></li></NavLink>
                        <NavLink to="/allEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>All Sports Equipment</a></li></NavLink>
                        <NavLink to="/addEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Add Equipment</a></li></NavLink>
                        <NavLink to="/myEquipment"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>My Equipment List</a></li></NavLink>
                        <NavLink to="/about"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>About Us</a></li></NavLink>
                        <NavLink to="/contact"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Contact</a></li></NavLink>
                        <NavLink to="/support"
                            className={({ isActive }) => (isActive ? "text-red-600 font-bold" : "text-white")}
                        ><li><a>Support</a></li></NavLink>
                    </ul>
                </div>
                {/* Navbar End */}
                <div className="navbar-end gap-4">
                    {user?.email ? (
                        <div className="flex gap-2 items-center">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                <img
                                    className="rounded-full h-10 w-10 cursor-pointer"
                                    src={user.photoURL || ""}
                                    alt="User Profile"
                                />
                            </div>
                            <button onClick={handleLogOut} className="btn btn-secondary">
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-end gap-2">
                            <NavLink to="/signin">
                                <div>
                                    <a className="btn btn-primary">Sign In</a>
                                </div>
                            </NavLink>
                            <NavLink to="/signup">
                                <div>
                                    <a className="btn btn-secondary">Sign Up</a>
                                </div>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
