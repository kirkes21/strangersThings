import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <Link to={"/"} className="nav_item">
            Home
          </Link>
          <Link to={"/login"} className="nav_item">
            Log In
          </Link>
          <Link to={"/signup"} className="nav_item">
            Sign Up
          </Link>
          <Link to={"/logout"} className="nav_item">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
