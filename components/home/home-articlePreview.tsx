import Link from "next/link";
import HomeArticleMeta from "./home-articleMeta";

const HomeArticlePreview = () => {
  return (
    <>
      <div className="article-preview">
        <HomeArticleMeta />
        <Link
          href="/article/how-to-build-webapps-that-scale"
          className="preview-link"
        >
          <h1>How to build webapps that scale</h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">realworld</li>
            <li className="tag-default tag-pill tag-outline">
              implementations
            </li>
          </ul>
        </Link>
      </div>
    </>
  );
};

export default HomeArticlePreview;
