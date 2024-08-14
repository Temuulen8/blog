import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("query", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticle = async () => {
    const res = await fetch(`https://dev.to/api/articles/${query.id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticle();
  }, []);

  console.log("articleDetail", articleDetail);
  return (
    <div className="flex justify-center my-[100px]">
      <div className="w-[796px]">
        <p>{articleDetail?.title}</p>
        <div
          dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleDetail;
