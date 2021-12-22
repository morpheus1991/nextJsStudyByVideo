pageButton.forEach(function (ev) {
  ev.addEventListener("click", function (el) {
    ageButton.forEach(function (ev) {
      ev.classList.remove("on");
    });
    el.target.classList.add("on");
  });
});
