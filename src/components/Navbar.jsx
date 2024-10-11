import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
      <nav className="max-w-6xl h-20 mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} className="w-[172px] h-[56px]" alt="Ecomzy" />
        </NavLink>

        <div className="text-slate-100 -tracking-tighter font-medium flex items-center space-x-6 mr-5">
          <NavLink to="/">
            <p className="hover:text-green-400 cursor-pointer transition duration-300 ease-in">
              Home
            </p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative hover:text-green-400 cursor-pointer transition duration-300 ease-in">
              <FaShoppingCart fontSize={24} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs text-slate-100 animate-bounce w-5 h-5 rounded-full flex justify-center items-center shadow-green-600 shadow-lg">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
