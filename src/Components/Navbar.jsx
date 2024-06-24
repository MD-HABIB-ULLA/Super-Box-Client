import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
        .then(result => {
            console.log(result);
            Swal.fire(
                'Logout Successfully!',
                '',
                'success'
              )
            
            navigate('/login')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Sorry!',
                text: err.message,
              
              })
            console.log(err)
        })
}
  return (
    <div className=" bg-blue-200 ">
      <div className="navbar max-w-full px-5 border ">
        <div className="navbar-start">
          {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
          <a className="btn btn-ghost text-xl">Super Box</a>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
        <div className="navbar-end">
            {
              user?.email ?
              <div className="text-center">

                  <div className="dropdown dropdown-bottom dropdown-end">
                      <label tabIndex={0} className="avatar w-16">

                          <div className=" hover:cursor-pointer w-16 rounded-full">
                              <img src={user?.photoURL} />
                          </div>


                      </label>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                          <li> <p className=" text-center">{user?.displayName}</p></li>
                          <li><p className="">{user?.email}</p></li>
                          <li><button onClick={handleLogOut} className="btn text-lg font-semibold  text-slate-600">
                              <NavLink
                                  to="/login"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                  }
                              >
                                  Logout
                              </NavLink>
                          </button></li>
                      </ul>
                  </div>

              </div>
              : <Link to={'/login'} className=" text-blue-700 text-xl font-semibold">Log in</Link>
            } 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
