import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">Create User</NavLink>
          </li>
          <li>
            <NavLink to="all-users">All Users</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
