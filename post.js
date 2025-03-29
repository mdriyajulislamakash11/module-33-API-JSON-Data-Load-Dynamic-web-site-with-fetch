function PostUser() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const div = document.getElementById("post-list");

  for (const post of posts) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("post")
    newDiv.innerHTML = `
    <h4>user: ${post.id}</h4>
    <h5>Post: ${post.title}</h5>
    <p>User Des: ${post.body}</p>
    `;

    div.appendChild(newDiv)
  }
}

PostUser();
