import { Author } from "@/models/author.model";
import getHeader from "@/utils/headers.utils";

export async function followUser(username: string): Promise<Author> {
  return fetch(`https://realworld-gdsc.onrender.com/${username}/follow`, {
    method: "POST",
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.profile);
}

export async function unfollowUser(username: string): Promise<Author> {
    return fetch(`https://realworld-gdsc.onrender.com/${username}/follow`, {
      method: "DELETE",
      headers: getHeader(),
    })
      .then((res) => res.json())
      .then((res) => res.profile);
  }