import { Article } from "@/models/article.model";
import getHeader from "@/utils/headers.utils";

export async function getArticle(slug: string): Promise<Article> {
  //write down API URL
  const url: string = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}`;
  return fetch(url, {
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.article);
}

export async function deleteArticle(slug: string): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}`, {
    method: "DELETE",
    headers: getHeader(),
  });
}

export async function favoriteArticle(slug: string): Promise<Article> {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}/favorite`,
    {
      method: "POST",
      headers: getHeader(),
    }
  )
    .then((res) => res.json())
    .then((res) => res.article);
}

export async function unfavoriteArticle(slug: string): Promise<Article> {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/${slug}/favorite`,
    {
      method: "DELETE",
      headers: getHeader(),
    }
  )
    .then((res) => res.json())
    .then((res) => res.article);
}