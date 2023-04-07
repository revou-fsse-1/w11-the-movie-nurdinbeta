const API_ENDPOINT = "http://localhost:3000/users/";

const username = document.querySelector("#input-username");
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");
const confirmPassword = document.querySelector("#input-confirm-password");


function sendUserData() {
  fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    });
}

function userRegister() {
  fetch(API_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const data = users.find(
        (e) => e.username === username.value && e.email === email.value
      );
      if (!username.value) {
        alert("Please fill your username");
      } else if (!email.value) {
        alert("Please fill your email");
      } else if (!password.value) {
        alert("Please fill your password");
      } else if (!confirmPassword.value) {
        alert("Please fill your confirmation password");
      } else if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
      } else if (data !== undefined) {
        alert("Email or Username already registered.");
      } else {
        sendUserData();
        alert("Registration successful! Please log in to continue.");
        window.location.href = "index.html";
      }
    });
}

function userLogin() {
  fetch(API_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const checkUserData = users.find(
        (e) => e.username === username.value && e.password === password.value
      );
      if (!username.value || !password.value) {
        alert("Please fill your username and password");
      } else if (checkUserData == undefined) {
        alert("Invalid username or password. Please try again.");
      } else if (checkUserData == undefined) {
        alert("Invalid username or password. Please try again.");
      } else if (checkUserData !== undefined) {
        alert("Login success");
        window.location.href = "homepage.html";
      }
    });
}