import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const baseURI = 'https://jsonplaceholder.typicode.com';
    const response = await axios.get(`${baseURI}/posts`, {
      params: { _limit: limit, _page: page },
    });
    return response;
  }
}
