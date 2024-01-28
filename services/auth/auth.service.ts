import RegisterCredential from "@/models/register.model";
import getHeader from "@/utils/headers.utils";

export async function register(credential: RegisterCredential) {
  //write URL
  return fetch("", {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify({ user: credential }),
  });
}
