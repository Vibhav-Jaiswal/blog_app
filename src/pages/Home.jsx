import React from "react";
import Card from "../components/Card";
import { blogs } from "../config/data";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-bold text-white uppercase absolute shadow-2xl p-4">
          Welcome to my blog
        </h1>
        <img
          className="w-full h-48 sm:h-72 lg:h-96"
          src="https://papers.co/desktop/wp-content/uploads/papers.co-vz20-lines-dark-blue-abstract-pattern-background-29-wallpaper-320x180.jpg"
          alt="logo"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        {blogs.map((blog,i) => (
          <Card blog={blog} key={i}/>
        ))}
      </div>
      ;
    </>
  );
};

export default Home;
