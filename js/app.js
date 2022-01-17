particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("Particles loaded - ENJOY!");
});
window.onscroll = () => {
  if (window.scrollY > 150) {
    navbar.classList.add("fixed-top", "navbar-background");
  } else {
    navbar.classList.remove("fixed-top", "navbar-background");
  }
};
const navbar = document.querySelector(".navbar");

const logoSVG = document.querySelector("svg");

const aboutMore = document.querySelector(".about-more");

aboutMore.onclick = () => {
  aboutMore.classList.toggle("active");
};
