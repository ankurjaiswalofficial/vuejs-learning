<script setup lang="ts">
import { format } from 'date-fns';
import type { Post } from '../types/blog';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-4">
    <router-link :to="{ name: 'post', params: { id: post.id }}" class="no-underline">
      <h2 class="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600">{{ post.title }}</h2>
    </router-link>
    <p class="text-gray-600 mb-4">{{ post.content.substring(0, 150) }}...</p>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">By {{ post.author }}</span>
      <span class="text-sm text-gray-500">{{ format(post.createdAt, 'PPP') }}</span>
    </div>
    <div class="mt-2 flex gap-2">
      <span v-for="tag in post.tags" :key="tag" 
            class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>