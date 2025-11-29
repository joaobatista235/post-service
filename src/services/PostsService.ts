import postsRepository from "@/repositories/PostsRepository";
import { Post } from "@/models/Post";

class PostsService {

  getAll() {
    return postsRepository.getAll();
  }

  getById(id: number) {
    return postsRepository.getById(id);
  }

  create(data: Post) {
    return postsRepository.create(data);
  }

  update(id: number, data: Post) {
    return postsRepository.update(id, data);
  }

  delete(id: number) {
    return postsRepository.delete(id);
  }

  search(term: string) {
    if (!term || term.trim() === "") return [];

    return postsRepository.search(term);
  }

}

export default new PostsService();
