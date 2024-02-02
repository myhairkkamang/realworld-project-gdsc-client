import Markup from "@/components/article/article-markup";
import TagList from "@/components/article/tag-list";
import { getArticle } from "@/services/article/article.service";
import Link from "next/link";
import router from "next/router";

export default async function articlePage() {
  const article = getArticle(router.query.slug);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>

          <div className="article-meta">
            <Link href={"/profile/" + article.author.username}>
              <img src={article.author.image} alt="author avatar" />
            </Link>
            <div className="info">
              <Link
                href={"/profile/" + article.author.username}
                className="author"
              >
                {article.author.username}
              </Link>
              <time dateTime={article.createdAt} />
            </div>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <p>{article.description}</p>
            <Markup content={article.body} />
            <TagList tags={article.tagList} />
          </div>
        </div>

        <hr />

        {/* <CommentList slug={router.query.slug} /> */}
      </div>
    </div>
  );
}
