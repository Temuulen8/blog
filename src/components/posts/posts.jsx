import React from "react";
import PostCard from "./postCards";

const Posts = ({ articles }) => {
  return (
    <>
      <div className="m-[100px]">
        <h1 className="font-bold text-2xl pl-5 container m-auto">
          All Blog Post
        </h1>
        <div className="container m-auto flex justify-between items-center p-5">
          <ul className="text-xs flex gap-5">
            <li>All</li>
            <li>Design</li>
            <li>Travel</li>
            <li>Fashion</li>
            <li>Technology</li>
            <li>Branding</li>
          </ul>
          <p className="text-xs">Wiev All</p>
        </div>
        <div className="flex flex-wrap justify-center px-30 gap-3">
          {articles.map((art) => (
            <PostCard
              postCardImg={art.social_image}
              category={art.type_of}
              postCardText={art.title}
              date={art.readable_publish_date}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="w-[123px] h-[48px] border rounded-md mt-[100px]">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
