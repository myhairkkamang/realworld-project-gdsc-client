const TOKEN_KEY: string = "token";

export function getToken(): string | undefined {
  return localStorage.getItem(TOKEN_KEY) || undefined;
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}
