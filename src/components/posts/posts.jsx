import React from "react";
import PostCard from "./postCards";

const Posts = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-8">
        <div>
          <h1 className="font-bold text-2xl ">All Blog Post</h1>
          <div className="flex gap-[810px] ">
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
        </div>
        <div className="grid grid-cols-3 w-[1216px]">
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
