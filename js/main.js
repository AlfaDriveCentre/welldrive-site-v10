// Mobil menü ve dil menüsü kontrolü
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  var langToggle = document.getElementById("langToggle");
  var langMenu = document.getElementById("langMenu");
  var langLabel = document.querySelector(".lang-label");
  var flagImg = langToggle ? langToggle.querySelector(".icon-flag") : null;

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      // Dil menüsü açıksa kapat
      if (langMenu) {
        langMenu.classList.remove("open");
      }
    });
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      langMenu.classList.toggle("open");
    });

    // Bir dil seçildiğinde sadece görsel & label'ı değiştir (gerçek yönlendirme yok)
    langMenu.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = this.querySelector("span").textContent;
        var img = this.querySelector("img");
        if (langLabel) langLabel.textContent = text;
        if (flagImg && img) flagImg.src = img.src;
        langMenu.classList.remove("open");
      });
    });

    // Sayfanın herhangi bir yerine tıklayınca kapat
    document.addEventListener("click", function () {
      langMenu.classList.remove("open");
    });
  }
});
