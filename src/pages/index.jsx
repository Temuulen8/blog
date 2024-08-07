import Content from "@/components/content/content";
import Posts from "@/components/posts/posts";
import TrendingPost from "@/components/trending";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Content />
      <TrendingPost />
      <Posts articles={articles} />
    </>
  );
}
