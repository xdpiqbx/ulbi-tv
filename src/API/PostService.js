import axios from 'axios';

export default class PostService {
  static async getAll() {
    try {
      const URI = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(URI, {});
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
