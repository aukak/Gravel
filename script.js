function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 19;
  let stars = Math.random()* 100;
  let duration = Math.random() * 3;

  e.style.fontSize = 20 + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  stars();
}, 100);
