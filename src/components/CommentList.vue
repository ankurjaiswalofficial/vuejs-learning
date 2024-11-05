<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'date-fns';
import { useBlogStore } from '../stores/blogStore';
import type { Comment } from '../types/blog';

const props = defineProps<{
  postId: number;
}>();

const store = useBlogStore();
const newComment = ref('');

const addComment = () => {
  if (newComment.value.trim()) {
    store.addComment({
      postId: props.postId,
      content: newComment.value,
      author: 'Current User'
    });
    newComment.value = '';
  }
};
</script>

<template>
  <div class="mt-8">
    <h3 class="text-xl font-bold mb-4">Comments</h3>
    
    <div class="mb-4">
      <textarea
        v-model="newComment"
        class="w-full p-2 border rounded-lg"
        placeholder="Write a comment..."
        rows="3"
      ></textarea>
      <button
        @click="addComment"
        class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Comment
      </button>
    </div>

    <div v-for="comment in store.getCommentsByPostId(postId)" :key="comment.id" 
         class="bg-gray-50 p-4 rounded-lg mb-4">
      <p class="mb-2">{{ comment.content }}</p>
      <div class="flex justify-between text-sm text-gray-500">
        <span>By {{ comment.author }}</span>
        <span>{{ format(comment.createdAt, 'PPP') }}</span>
      </div>
    </div>
  </div>
</template>