import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-wrap bg-slate-400 p-4 justify-around items-center">
      <Link to="/">
        <h1 className="font-bold text-xl sm:text-2xl">
          <span className="text-gray-200">Learn</span>
          <span className="text-gray-600">Freely</span>
        </h1>
      </Link>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
