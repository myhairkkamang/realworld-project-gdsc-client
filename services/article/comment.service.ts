import { Comment } from "@/models/comment.model";
import getHeader from "@/utils/headers.utils";

export async function getComments(slug: string): Promise<Comment[]> {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}/comments`, {
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.comments);
}

export async function createComment(
  slug: string,
  body: string
): Promise<Comment> {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}/comments`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify({
      comment: {
        body,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.comment);
}

export async function deleteComment(
  slug: string,
  id: number
): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}/comments/${id}`, {
    method: "DELETE",
    headers: getHeader(),
  });
}
