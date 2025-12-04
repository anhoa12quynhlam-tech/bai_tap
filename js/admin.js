// Check login trước khi hiển thị
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "./login.html";
} else {
  document.body.style.display = "block"; // show page nếu đã login
}

// Logout
document.getElementById("btnLogout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "./login.html";
});
