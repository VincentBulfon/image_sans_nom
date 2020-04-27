window.addEventListener(
  "load",
  () => {
    document.querySelector(".body_nojs").classList.add("body_js");
    document.querySelector(".body_nojs").classList.remove("body_nojs");
  },
  false
);
