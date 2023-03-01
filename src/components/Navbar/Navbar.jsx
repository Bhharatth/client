import React from "react";
import "./Navbar.css";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left"></div>
      <div className="navbar-middle">
        <h1 className="navbar-logo">Your Name</h1>
      </div>
      <div className="navbar-right">
        <div className="profile-pic"></div>
        <button className="login-btn">
          {/* <LogoutOutlinedIcon /> */}
        </button>
        <div className="shopping-cart-icon">
          {/* <ShoppingCartOutlinedIcon /> */}
          <div className="notification">3</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
