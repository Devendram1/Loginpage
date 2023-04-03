import React from "react";

const Header = () => {
  return (
    <nav className="fixed">
      <div className="flex justify-between w-screen pl-80 pr-60 gap-x-10 item-center bg-black text-white h-12 text-center pt-3 ">
        <h1> HEllO DEV</h1>
        <ul className="flex gap-x-10  ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="Login">Login</a>
          </li>
          <li>
            <a href="Register">Register </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
