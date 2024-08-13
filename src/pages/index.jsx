import Content from "@/components/content/content";
import Posts from "@/components/posts/posts";
import TrendingPost from "@/components/trending";
import { SearchContext } from "@/provider/provider";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const findArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <h2 className="flex justify-center">хайлт: {searchValue}</h2>
      <Content />
      <TrendingPost />
      <Posts articles={findArticles} />
    </>
  );
}
