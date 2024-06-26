import { Link, NavLink } from "react-router-dom";

const Navbar2 = () => {

    const navLinks = <>
        <li>
            <NavLink to="/my-website/about-us2" className={`p-1 text-lg`}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              About Us</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/all-products2" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              All products</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/blogs2" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/orders2" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Orders</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/reviews2" className={`p-1 text-lg  `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Reviews</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/issues2" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Issues</NavLink>
        </li>
        <li>
            <NavLink to="/my-website/edit-website" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Edit Website</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/welcome-page" className={`p-1 text-lg `}
             style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "blue" : "black",
                  backgroundColor: "transparent",
                  textDecoration: isActive ?"underline":"none",

                };
              }}>
              Dashboard</NavLink>
        </li>

    </>

    return (
        <div>
            <div className="navbar flex justify-between bg-base-100 px-5">
                <div className=" flex-none">

                    <Link to={'/my-website'} className="btn btn-ghost text-xl">Brand Name</Link>
                </div>

                <div className="flex-none">

                    <div className="hidden lg:block  flex-1 ">
                        <ul className="menu menu-horizontal px-1 space-x-10 ">
                        {navLinks}

                        </ul>
                    </div>

                    <div className="flex flex-1 justify-end px-2 lg:hidden">
                        <div className="flex items-stretch">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost ">
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
                                    className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-max p-2 shadow">
                                     {navLinks}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;