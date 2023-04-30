import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((er) => {
                console.log(er.message);
            })
    }

    return (
        <header className="bg-opacity-60 bg-white bg-blend-multiply fixed top-0 z-30 w-full">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <div className="form-control max-w-full">
                                    <input type="text" placeholder="Search Location" className="input input-bordered" />
                                </div>
                                <li className="text-lg font-semibold"><Link to="/">Home</Link></li>
                                <li className="text-lg font-semibold"><a>Destination</a></li>
                                <li className="text-lg font-semibold"><a>Contact</a></li>
                                
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-2xl font-bold" >Travelers Zone</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <div className="form-control max-w-full">
                                <input type="text" placeholder="Search Location" className="input input-bordered" />
                            </div>
                            <li className="text-lg font-semibold"><Link to="/">Home</Link></li>
                            <li className="text-lg font-semibold"><a>Destination</a></li>
                            <li className="text-lg font-semibold"><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-2">
                        <h4 className="text-xl font-bold hidden sm:block">{user && user.displayName}</h4>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user ? user.photoURL : "https://img.freepik.com/free-icon/user_318-563642.jpg?q=10&h=200"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="sm:hidden mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li className="text-xl text-center font-bold mb-5">User: {user && user.displayName}</li>
                                <li className="text-lg font-semibold">
                                    {
                                        user
                                            ?
                                            <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                                            :
                                            <Link className="btn btn-warning" to="/login">Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="hidden sm:block">
                            {
                                user
                                    ?
                                    <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                                    :
                                    <Link className="btn btn-warning" to="/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;