/*
**FETCH API**

- Um meio nativo de realizar requisições a APIs com JavaScript;
- Podemos utilizar com Promise ou async/await;
- Se a requisição for GET é preciso passar apenas a URL do recurso que
  estamos resgatando da API;
- Caso seja outro verbo, podemos configurar a requisição com: method, body e headers;
- O fetch é muito utilizado com frameworks/libs como: React, Vue e Angular;

*/

const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsConteiner = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// GetIdFromURL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// GetAllPosts
async function getAllPosts() {
  const respose = await fetch(url);

  const data = await respose.json();
  // console.log(data);

  loadingElement.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    postsConteiner.appendChild(div);
  })
}

// GetIndividualPost
async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const dataPost = await responsePost.json();
  // console.log(dataPost.title);

  const dataComments = await responseComments.json();
  // console.log(dataComments);

  loadingElement.classList.add("hide");
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  });
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);
  commentsContainer.appendChild(div);
}

// Post a comment
async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`,
    {
      method: "POST",
      body: comment,
      headers: {
        "content-type": "application/json"
      },
    });

    const data =  await response.json();

    createComment(data);
}

if (!postId) {
  getAllPosts();
} else {
  getPost(postId);

  // Add event to comment form
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value
    }

    comment = JSON.stringify(comment);

    postComment(comment)
  });
}