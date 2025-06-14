export async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }
  const data = await response.json() as unknown;
  return data as T
}