import RegisterCredential from "@/models/register.model";
import { User } from "@/models/user.model";
import getHeader from "@/utils/headers.utils";

export async function register(credential: RegisterCredential) {
  //CORS problem cause
  return fetch(`${process.env.API_ENDPOINT}/users`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify({ user: credential }),
  });
}

export async function getCurrentUser(): Promise<User> {
  //write URL
  return fetch(`${process.env.API_ENDPOINT}/users`, {
    method: "GET",
    headers: getHeader(),
  })
    .then((res) => res.json())
    .then((res) => res.user);
}

export async function updateUser(user: unknown) {
  return fetch("https://realword-gdsc.onrender.com/users", {
    method: "PUT",
    headers: getHeader(),
    body: JSON.stringify({ user }),
  });
}
