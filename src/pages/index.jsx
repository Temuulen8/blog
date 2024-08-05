import Content from "@/components/content/content";
import Posts from "@/components/posts/posts";
import TrendingPost from "@/components/trending";

export default function Home() {
  return (
    <>
      <Content />
      <TrendingPost />
      <Posts />
    </>
  );
}
