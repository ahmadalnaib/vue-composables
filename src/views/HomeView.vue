<script setup>
import { ref, onMounted } from 'vue';
import getPosts from '../composables/getPosts.js';
import PostList from '@/components/posts/PostList.vue';

const { posts, error, fetchPosts } = getPosts();

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <main>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
