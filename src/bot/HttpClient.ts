/**
 * A generic HTTP Client.
 */
export class HttpClient {
  baseUrl: string;
  headers: Record<string, string>;

  constructor(baseUrl: string, headers: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: this.headers,
    });

    return (await response.json()) as T;
  }
}
