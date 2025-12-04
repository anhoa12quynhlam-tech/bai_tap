// Kiểm tra login khi load trang
window.onload = function () {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "./login.html";
    return;
  }
};

// Logout
document.getElementById("btnLogout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "./login.html";
});
