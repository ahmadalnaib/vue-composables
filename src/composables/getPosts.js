import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchPosts = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch('http://localhost:3000/posts');
      if (!response.ok) throw new Error('No data available');
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, fetchPosts };
};

export default getPosts;

