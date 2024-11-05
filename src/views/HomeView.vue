<script setup lang="ts">
import { useBlogStore } from '../stores/blogStore';
import PostCard from '../components/PostCard.vue';

const store = useBlogStore();
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Blog Posts</h1>
      <router-link
        to="/create"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Create Post
      </router-link>
    </div>
    
    <div v-if="store.posts.length === 0" class="text-center text-gray-500 py-8">
      No posts yet. Be the first to create one!
    </div>
    
    <div v-else>
      <PostCard
        v-for="post in store.posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>