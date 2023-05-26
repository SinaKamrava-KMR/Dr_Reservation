export class HttpClient {
  constructor(url) {
    this.baseUrl = url;
  }

  async getAll() {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    return data;
  }
}
