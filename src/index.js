import './style.css';

const renderPosts = (posts) => {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerText = post.title;
    postsContainer.appendChild(postElement);
  });
};

// Fetching data from JSON-server
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => renderPosts(data))
  .catch(error => console.error('Error:', error));