// Mobil menü aç/kapat
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  if (!navToggle) return;

  navToggle.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
  });
});
