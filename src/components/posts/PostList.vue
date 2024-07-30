<script setup>
import { defineProps } from 'vue';
import SinglePost from '@/components/posts/SinglePost.vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <h2 class="text-2xl font-bold m-10"> Last Posts</h2>
  <section class="p-6 bg-gray-100 rounded-lg shadow-md">
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </section>
</template>
