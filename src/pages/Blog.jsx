import React, { useEffect, useState } from "react";
import { blogs } from "../config/data";
import { useParams } from "react-router-dom";

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
    <div>
      {data && (
        <div className="flex flex-col">
          <img className="w-3/5 self-center py-4" src={data.image} alt="logo" />
          <div className="p-8 ">
            <p>
              <span className="font-semibold mr-2">Title:</span>
              {data.title}
            </p>
            <p>
              <span className="font-semibold mr-2">Author:</span>
              {data.author}
            </p>
            <p>
              <span className="font-semibold mr-2">Category:</span>{" "}
              {data.category}
            </p>
            <p>
              <span className="font-semibold mr-2"> Published Date:</span>
              {data.published_date}
            </p>
            <p>
              <span className="font-semibold mr-2">Reading Time:</span>{" "}
              {data.reading_time}
            </p>
            <p>
              <span className="font-semibold mr-2">Content:</span>{" "}
              {data.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
