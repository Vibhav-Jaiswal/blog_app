import React from "react";
import { Link } from "react-router-dom";

const Card = ({blog}) => {
  const {title, category,image,id} = blog;
  return (
    <div className="border-2 sm:w-96 rounded-lg m-4 flex flex-col shadow-xl">
      <img
        className="w-96 rounded-t-lg object-cover"
        src={image}
        alt="blog-img"
      />
      <div className="flex flex-col items-center p-4 gap-4">
        <h1 className="text-sm uppercase">{category}</h1>
        <p className="text-xl font-semibold capitalize line-clamp-2">
          {title}
        </p>
        <Link to={`/blog/${id}`}>
        <button className=" bg-slate-400 py-3 px-8 rounded-lg text-white hover:opacity-90 shadow-lg cursor-pointer">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
