import { Author } from "@/models/author.model";
import getHeader from "@/utils/headers.utils";

export async function followUser(username: string): Promise<Author> {
  return fetch(`${process.env.API_ENDPOINT}/${username}/follow`, {
    method: "POST",
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.profile);
}

export async function unfollowUser(username: string): Promise<Author> {
  return fetch(`${process.env.API_ENDPOINT}/${username}/follow`, {
    method: "DELETE",
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.profile);
}
