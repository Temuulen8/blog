import React from "react";
import PostCards from "./postCards";

const postCardsList = [
  {
    postCardImg:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-SvH~z-mGLp~6yzyAcLXyM0ZLQDdurTguok8IU7e6t-8bVXldStP5ZvHQVizoJI2PbNKnF97u~5r7OaKWPliYNVuPgj6uv-dwzbO35pp8jAKECiDeJ6z9PFZtgvQtjJf~uR3i4GU5SOj2BSmjKS3IqO24xW2MKu6ye2~OVevqRBv7LpPJ7RrW5nydfVTa~aQWt9~54gByB9hFNCQDJAx8IUQg9hFIGdRpFuW13Ssp1rSm~Dc~Nsot387YbNX~0POxjlzS6x3vN-OiEzP~qZm6-nq~CiwVGTq~F0F6B6-uOfXDc1Fz~9df2iEUC6ZBe6~nwdCrZSly1V1Z6ezbm6pA__",
    category: "Technology",
    postCardText:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const Posts = () => {
  return (
    <>
      <div className="">
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
        <PostCards />
      </div>
    </>
  );
};

export default Posts;
