import { Article } from "@/models/article.model";
import getHeader from "@/utils/headers.utils";

export async function getArticle(slug: string): Promise<Article> {
  //write down API URL
  const url: string = "";
  return fetch(url, {
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.article);
}
