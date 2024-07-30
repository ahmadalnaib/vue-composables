<script setup>
import { ref, onMounted } from 'vue';
import getPosts from '../composables/getPosts.js';
import PostList from '@/components/posts/PostList.vue';
import Spinner from '@/components/posts/Spinner.vue';

const { posts, error, fetchPosts } = getPosts();

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <main>
   
    <div v-if="error">{{ error }}</div>
    <div v-else-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </main>
</template>
