import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { data } from "./App";
const NavBar = () => {
  const { productId } = useContext(data);

  return (
    <div className="flex justify-around bg-gray-800 p-4">
      <NavLink
        to="/"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        Contact
      </NavLink>
      <NavLink
        to="/product"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        Product
      </NavLink>
      <NavLink
        to="/about"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        About
      </NavLink>

      <NavLink
        to="/signUp"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        SingUp
      </NavLink>


      <NavLink
        to="/login"
        className="text-white text-lg p-2 rounded hover:bg-gray-700"
      >
        Login
      </NavLink>


      <NavLink to="/cart" className="text-white text-lg p-2 rounded hover:bg-gray-700">
        Cart {productId.length}
      </NavLink>
    </div>
  );
};

export default NavBar;
