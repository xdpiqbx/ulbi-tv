import axios from 'axios';

export default class PostService {
  static async getAll() {
    const URI = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(URI, {});
    return response.data;
  }
}
