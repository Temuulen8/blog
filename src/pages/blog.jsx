import React from "react";
import Posts from "@/components/posts/posts";
import { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return <Posts articles={articles} />;
};

export default Blog;
