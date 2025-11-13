// basit burger menü için küçük bir kanca burada bulunuyor
function toggleNav() {
  var n = document.getElementById("main-nav");
  if (!n) return;
  n.classList.toggle("open");
}
