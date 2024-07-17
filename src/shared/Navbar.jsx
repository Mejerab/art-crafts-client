import { TbBrandCraft } from "react-icons/tb";
import './Navbar.css'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoMoon, GoSun } from "react-icons/go";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dark, setDark] = useState(null);
    const links = <>
        <li className="font-medium"><Link to='/'>Home</Link></li>
        <li className="font-medium"><Link to='/allcrafts'>All Art & craft Items</Link></li>
        <li className="font-medium"><Link to='/addcrafts'>Add Craft Item</Link></li>
        <li className="font-medium"><Link to='/mycrafts'>My Art&Craft List</Link></li>
    </>;
    const body = document.querySelector('body');
    if (dark) {
        body.setAttribute('data-theme', 'dark');
    }
    else{
        body.setAttribute('data-theme', 'light');
    }
    console.log(body);
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => console.error(error))
    }
    return (
        <div id="navbar" className="navbar bg-[#95453590] px-8 text-white z-50">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
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
                        className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn text-white bg-transparent border-none hover:bg-transparent text-2xl nothing"><span><TbBrandCraft className="text-3xl -rotate-90" /> </span>Craft Mania</Link>
            </div>
            <div className="navbar-center hidden xl:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={()=>setDark(!dark)} className="mr-5 transition-[.5s]">
                    {
                        dark ? <GoMoon className="text-4xl rotate-90 text-white" /> : <GoSun className="text-4xl font-bold text-white" />
                    }
                </button>
                {
                    user ? <div className="dropdown dropdown-end z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user && <img src={user.photoURL} alt="" />
                                }
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                user.displayName ? <h4 className="text-base my-3 font-semibold text-black text-center">{user.displayName}</h4> : <h4 className="text-base my-3 text-center font-semibold text-black">{user.email}</h4>
                            }
                            <li><button onClick={handleLogout} className="btn">Logout</button></li>
                        </ul>
                    </div> :
                        <div>
                            <Link to='/register' className="btn bg-[#95453590] rounded-full border-none mr-2 text-white">Register</Link>
                            <Link to='/login' className="btn bg-[#95453590] rounded-full ml-2 border-none text-white">Login</Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;
