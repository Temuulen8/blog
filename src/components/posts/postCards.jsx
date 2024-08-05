import React from "react";

const PostCards = ({ postCardImg, category, postCardText, date }) => {
  return (
    <div className="w-[392px] h-[476px] rounded-xl">
      <img
        src={postCardImg}
        alt=""
        className="w-[360px] h-[240px] rounded-xl"
      />
      <p className="font-medium text-sm text-[#4B6BFB]">{category}</p>
      <p className="font-semibold text-2xl">{postCardText}</p>
      <p className="text-base font-normal text-[#97989F]">{date}</p>
    </div>
  );
};

export default PostCards;
