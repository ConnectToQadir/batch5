import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", lable: "Home" },
    { to: "/about", lable: "About" },
    { to: "/contact", lable: "Contact" },
    { to: "/apply-online", lable: "Apply" },
  ];

  return (
    <div className="p-2 bg-slate-400">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <img
          className="w-20 h-auto"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <ul className="flex">
          {links.map((v, i) => {
            return (
              <li key={i} >
                <NavLink className="px-1" to={v.to}>
                  {v.lable}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
