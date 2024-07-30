<script setup>
import { defineProps,onMounted } from 'vue';
import getPost from '../composables/getpost';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { post, error, fetchPost } = getPost(props.id);
// Fetch post data when component is mounted
onMounted(() => {
  fetchPost();
})
</script>

<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else-if="post">
    <div class="p-6 max-w-lg mx-auto bg-white rounded-xl space-y-4 mb-5">
      <h1 class="text-2xl font-bold text-gray-900">{{ post.title }}</h1>
      <p class="text-gray-500">{{ post.body }}</p>
      <div class="flex flex-wrap space-x-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
