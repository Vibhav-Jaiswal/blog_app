import React, { useEffect, useState } from "react";
import { blogs } from "../config/data";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const post = blogs.find((blog) => blog.id === parseInt(params.id));

    if (post) {
      setData(post);
    }
  }, []);

  return (
    <>
      {data && (
        <div className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
          <h1 className="text-2xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-3xl">
            {data.title}
          </h1>
          <img
            className="mt-10 p-3 w-4/5 object-cover self-center"
            src={data.image}
            alt="logo"
          />
          <div className="p-3 max-w-2xl mx-auto w-full">
            <div className="flex justify-between p-3 border-b border-slate-500 text-xs">
              <span>{data.published_date}</span>
              <span>{data.reading_time} reading</span>
            </div>
            <p className="py-3">
              <span className="font-semibold mr-2">Author:</span>
              {data.author}
            </p>
            <p className="font-bold">{data.category}:</p>
            <p>{data.content}</p>
            <Link to="/">
              <button className=" bg-slate-400 py-3 px-8  mt-4 rounded-lg text-white hover:opacity-90 shadow-lg cursor-pointer">Go Back</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
