import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchPost = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts/' + id);
      if (!response.ok) throw new Error('No data available');
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, fetchPost };
};

export default getPost;

