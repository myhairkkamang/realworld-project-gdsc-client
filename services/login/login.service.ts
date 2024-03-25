import LoginCredential from "@/models/login.model";
import getHeader from "@/utils/headers.utils";

export async function login(credential: LoginCredential) {
  //write URL
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/login`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify({ user: credential }),
  });
}
