// Xử lý login
document.getElementById("btnLogin").addEventListener("click", function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Demo login: admin / 123
  if (user === "admin" && pass === "123") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./admin.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
});

// Nếu đã login → redirect thẳng sang admin
window.onload = function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "./admin.html";
  }
};
