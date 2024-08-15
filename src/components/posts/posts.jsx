import React from "react";
import PostCard from "./postCards";
import Link from "next/link";

const Posts = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-8">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl ">All Blog Post</h1>
          <div className="flex gap-[1150px] ">
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
        <div className="grid grid-cols-3 gap-5 ">
          {articles.map((art) => (
            <Link href={`/${art.id}`}>
              <PostCard
                postCardImg={art.social_image}
                category={art.type_of}
                postCardText={art.title}
                date={art.readable_publish_date}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="w-[123px] h-[48px] border rounded-md my-[100px]">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
