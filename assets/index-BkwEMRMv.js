(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && i(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
window.addEventListener("scroll", function () {
  const r = document.querySelector(".header__fix");
  window.scrollY > 0
    ? (r.style.backgroundColor = "rgba(0,0,0, .8)")
    : ((r.style.backgroundColor = "transparent"), страницы);
});
const c = document.querySelector(".header__btn");
c.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1, // По умолчанию 1 слайд для мобильных устройств
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    950: {
      // Для экранов шириной 950px и больше
      slidesPerView: 3, // Показывать 3 слайда
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
    838: {
      // Для экранов до 838px
      slidesPerView: 3, // Также 3 слайда, но можно изменить другие параметры
      spaceBetween: 28,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
    },
    // Дополнительные настройки для экранов меньшей ширины
  },
});
