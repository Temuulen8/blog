import Link from "next/link";
import React from "react";

const PostCard = ({ postCardImg, category, postCardText, date }) => {
  return (
    // <Link href={"/blog/" + article.id}>
    <div className="w-[505px] h-[476px] rounded-xl border flex flex-col gap-3 px-4 py-5">
      <div className="flex justify-center">
        <img
          src={postCardImg}
          alt=""
          className="w-[470px] h-[240px] rounded-lg"
        />
      </div>
      <p className="font-medium text-sm text-[#4B6BFB] bg-[#4B6BFB0D] rounded-lg w-14 flex justify-center">
        {category}
      </p>
      <p className="font-semibold text-2xl">{postCardText}</p>
      <p className="text-base font-normal text-[#97989F]">{date}</p>
    </div>
    // </Link>
  );
};

export default PostCard;
