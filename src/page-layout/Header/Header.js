import React from "react";
import { NavLink } from "react-router-dom";

const navActive = (navStatus) => (navStatus.isActive ? "active" : "link");

const Header = () => {
  return (
    <div>
      <div>
        <NavLink className={(nD) => navActive(nD)} to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className={(nD) => navActive(nD)} to="/checkout">
          Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
