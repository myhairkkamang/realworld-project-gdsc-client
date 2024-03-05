import { AuthContext } from "@/context/auth.context";
import { Article } from "@/models/article.model";
import { deleteArticle } from "@/services/article/article.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import FollowButton from "../profile/follow-btn";
import FavoriteButton from "./favorite-btn";

interface Props {
  article: Article;
}

export default function ArticleActions({ article }: Props) {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    setIsLoading(true);
    const response = await deleteArticle(article.slug);
    setIsLoading(false);

    if (response.ok) {
      router.push("/");
      return;
    }
  }

  if (user && user.username === article.author.username) {
    return (
      <>
        <Link
          className="btn btn-outline-secondary btn-sm"
          ui-sref="app.editor({ slug: $ctrl.article.slug })"
          href={"/editor/" + article.slug}
        >
          <i className="ion-edit"></i> Edit Article
        </Link>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
          disabled={isLoading}
        >
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </>
    );
  } else {
    return (
      <>
        <FollowButton
          username={article.author.username}
          following={article.author.following}
          slug={article.slug}
        />
        &nbsp;
        <FavoriteButton article={article} isExtended={true} />
      </>
    );
  }
}
