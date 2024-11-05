<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBlogStore } from '../stores/blogStore';

const router = useRouter();
const store = useBlogStore();

const title = ref('');
const content = ref('');
const tags = ref('');

const createPost = () => {
  if (title.value.trim() && content.value.trim()) {
    store.addPost({
      title: title.value,
      content: content.value,
      author: 'Current User',
      tags: tags.value.split(',').map(tag => tag.trim()).filter(Boolean)
    });
    router.push('/');
  }
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8">Create New Post</h1>
    
    <form @submit.prevent="createPost" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700">Title</label>
        <input
          v-model="title"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          v-model="content"
          required
          rows="10"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
        <input
          v-model="tags"
          type="text"
          placeholder="vue, javascript, webdev"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div class="flex gap-4">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Create Post
        </button>
        <button
          type="button"
          @click="router.back()"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>