import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Post, Comment } from '../types/blog';

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<Post[]>([]);
  const comments = ref<Comment[]>([]);

  const addPost = (post: Omit<Post, 'id' | 'createdAt'>) => {
    posts.value.push({
      ...post,
      id: posts.value.length + 1,
      createdAt: new Date()
    });
  };

  const addComment = (comment: Omit<Comment, 'id' | 'createdAt'>) => {
    comments.value.push({
      ...comment,
      id: comments.value.length + 1,
      createdAt: new Date()
    });
  };

  const getPostById = computed(() => {
    return (id: number) => posts.value.find(post => post.id === id);
  });

  const getCommentsByPostId = computed(() => {
    return (postId: number) => comments.value.filter(comment => comment.postId === postId);
  });

  return {
    posts,
    comments,
    addPost,
    addComment,
    getPostById,
    getCommentsByPostId
  };
});