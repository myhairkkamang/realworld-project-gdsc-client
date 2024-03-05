import { AuthContext } from "@/context/auth.context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Comment } from "@/models/comment.model";
import Image from "next/image";
import {
  createComment,
  deleteComment,
  getComments,
} from "@/services/article/comment.service";

interface Props {
  slug: string;
}

export default function CommentList({ slug }: Props) {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState<Comment[]>();

  async function create(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const comment: string = (event.target as HTMLFormElement).comment.value;
    createComment(slug, comment);
    (event.target as HTMLFormElement).comment.value = "";
    const comments = await getComments(slug);
    setComments(comments);
  }

  async function deleteC(id: number) {
    await deleteComment(slug, id);
    const comments = await getComments(slug);
    setComments(comments);
  }

  useEffect(() => {
    async function updateComment(slug: string) {
      setComments(await getComments(slug));
    }

    updateComment(slug);
  }, [slug, comments]);

  if (!user) {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <p>
            <Link href="/login">Sign in</Link>
            &nbsp; or &nbsp;
            <Link href="/register">Sign up</Link>
            &nbsp; to add comments on this article.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form" onSubmit={create}>
          <div className="card-block">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
            ></textarea>
          </div>
          <div className="card-footer">
            <Image
              src={user.image}
              className="comment-author-img"
              alt={`${user.username} avatar`}
            />
            <button type="submit" className="btn btn-sm btn-primary">
              Post Comment
            </button>
          </div>
        </form>

        {comments &&
          comments.map((comment: Comment) => (
            <div key={comment.body} className="card">
              <div className="card-block">
                <p className="card-text">{comment.body}</p>
              </div>
              <div className="card-footer">
                <Link
                  href={"/profile/" + comment.author.username}
                  className="comment-author"
                >
                  <Image
                    src={comment.author.image}
                    className="comment-author-img"
                    alt={`${comment.author.username} avatar`}
                  />
                </Link>
                &nbsp;
                <Link
                  href={"/profile/" + comment.author.username}
                  className="comment-author"
                >
                  {comment.author.username}
                </Link>
                <span className="date-posted">{comment.createdAt}</span>
                <span className="mod-options">
                  <i
                    className="ion-trash-a"
                    onClick={() => deleteC(comment.id)}
                  ></i>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
