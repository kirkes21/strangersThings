import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  return (
    <div id="navBar" className="nav_bar_container">
      <div className="link_container">
        <div  >
          <Link to={"/"} className="nav_item">
            Home
          </Link>
          {token ? (
            <>
              <Link to={"/add"} className="nav_item">
                CreatePost
              </Link>
              <Link to={"/profile"} className="nav_item">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="nav_item">
                Log In
              </Link>
              <Link to={"/signup"} className="nav_item">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
