import Markup from "@/components/article/article-markup";
import TagList from "@/components/article/tag-list";
import { getArticle } from "@/services/article/article.service";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import CommentList from "@/components/article/comment";
import { Article } from "@/models/article.model";
import ArticleActions from "@/components/article/article-actions";

type Params = {
  slug: string;
};

export default function ArticlePage() {
  const router: NextRouter = useRouter();
  const { slug } = router.query as Params;
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    async function fetchArticle() {
      setArticle(await getArticle(slug));
    }

    fetchArticle();
  }, [article, slug]);

  return (
    <>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article!.title}</h1>

            <div className="article-meta">
              <Link href={"/profile/" + article!.author.username}>
                <Image src={article!.author.image} alt="author avatar" />
              </Link>
              <div className="info">
                <Link
                  href={"/profile/" + article!.author.username}
                  className="author"
                >
                  {article!.author.username}
                </Link>
                <time dateTime={article!.createdAt} />
              </div>
              <ArticleActions article={article!} />
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <p>{article!.description}</p>
              <Markup content={article!.body} />
              <TagList tags={article!.tagList} />
            </div>
          </div>

          <hr />

          <CommentList slug={slug} />
        </div>
      </div>
    </>
  );
}
