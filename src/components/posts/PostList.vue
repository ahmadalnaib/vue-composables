<script setup>
import { ref,defineProps } from 'vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <section>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in props.posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </section>
  
</template>