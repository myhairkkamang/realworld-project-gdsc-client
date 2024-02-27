import RegisterCredential from "@/models/register.model";
import { User } from "@/models/user.model";
import getHeader from "@/utils/headers.utils";

export async function register(credential: RegisterCredential) {
  //write URL
  return fetch("", {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify({ user: credential }),
  });
}

export async function getCurrentUser(): Promise<User> {
  //write URL
  return fetch("", {
    method: "GET",
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.user);
}
