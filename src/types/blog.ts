export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  tags: string[];
}

export interface Comment {
  id: number;
  postId: number;
  content: string;
  author: string;
  createdAt: Date;
}
