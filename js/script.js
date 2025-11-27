function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    errorMessage.textContent = "";
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
}

document.getElementById("startLearningBtn").onclick = function() {
  console.log("Hello");
  window.location.href = "Login.html";
};