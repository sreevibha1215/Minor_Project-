export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("finverify_token");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function clearToken(): void {
  localStorage.removeItem("finverify_token");
}