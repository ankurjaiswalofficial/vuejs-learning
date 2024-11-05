<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBlogStore } from '../stores/blogStore';
import { format } from 'date-fns';
import CommentList from '../components/CommentList.vue';

const route = useRoute();
const router = useRouter();
const store = useBlogStore();

const postId = parseInt(route.params.id as string);
const post = computed(() => store.getPostById(postId));

if (!post.value) {
  router.push('/');
}
</script>

<template>
  <div v-if="post" class="max-w-4xl mx-auto p-4">
    <button
      @click="router.back()"
      class="mb-4 text-blue-600 hover:text-blue-800"
    >
      ← Back
    </button>
    
    <article class="prose lg:prose-xl">
      <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
      <div class="flex justify-between items-center text-gray-500 mb-8">
        <span>By {{ post.author }}</span>
        <span>{{ format(post.createdAt, 'PPP') }}</span>
      </div>
      
      <div class="mb-4 flex gap-2">
        <span v-for="tag in post.tags" :key="tag" 
              class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          #{{ tag }}
        </span>
      </div>

      <p class="whitespace-pre-wrap">{{ post.content }}</p>
    </article>

    <CommentList :postId="postId" />
  </div>
</template>