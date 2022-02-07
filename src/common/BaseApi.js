import axios from 'axios';

class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(url, params) {
    return this.request('GET', url, params);
  }

  async post(url, params) {
    return this.request('POST', url, params);
  }

  async put(url, params) {
    return this.request('PUT', url, params);
  }

  async delete(url, params) {
    return this.request('DELETE', url, params);
  }

  async request(method, url, params) {
    const parseUrl = this.baseUrl ? `${this.baseUrl}${url}` : url;

    const options = {
      method,
      url: parseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (params) {
      if (method === 'GET') {
        options.params = params;
      } else {
        options.data = JSON.stringify(params);
      }
    }

    return axios(options);
  }
}

export default BaseApi;
