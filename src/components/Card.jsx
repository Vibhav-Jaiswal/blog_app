import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="border-2 sm:w-96 rounded-lg m-4 flex flex-col shadow-xl">
      <img
        className="w-96 rounded-t-lg object-cover"
        src="https://th.bing.com/th/id/OIP.J98X6U500C2ajnNemHIHmwHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="blog-img"
      />
      <div className="flex flex-col items-center p-4 gap-4">
        <h1 className="text-sm uppercase">React</h1>
        <p className="text-2xl font-semibold capitalize">
          Redux ToolKit
        </p>
        <Link to='/blog/'>
        <button className=" bg-slate-400 p-3 rounded-lg text-white hover:opacity-90 shadow-lg cursor-pointer">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
