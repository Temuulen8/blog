import Content from "@/components/content/content";
import LatestPost from "@/components/latesPost/latestPost";
import TrendingPost from "@/components/trendingPost";

export default function Home() {
  return (
    <>
      <Content />
      <TrendingPost />
      <LatestPost />
    </>
  );
}
