import axios from "axios";

// Тут статичная асинхронная функция котороя будет возвращать список постов
export default class PostService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
}
