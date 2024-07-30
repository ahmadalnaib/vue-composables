<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const snippet = computed(() => {
  return props.post.body.slice(0, 50);
});
</script>

<template>
  <div
    class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 mb-5"
  >
    <router-link
      :to="{ name: 'details', params: { id: post.id } }"
      class="text-2xl font-bold text-gray-900"
      >{{ props.post.title }}</router-link
    >
    <p class="text-gray-500">{{ snippet }}...</p>
    <div class="flex flex-wrap space-x-2">
      <span
        v-for="tag in props.post.tags"
        :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>
