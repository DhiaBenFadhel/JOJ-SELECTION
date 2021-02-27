const card = document.querySelector(".card");
const container = document.querySelector(".container");

const pic = document.querySelector(".pic img");
const title = document.querySelector(".title");
const circle = document.querySelector(".circle");
const description = document.querySelector(".description h3");
const choices = document.querySelector(".choices");
const Decide = document.querySelector(".Decide");

//Card movement Animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Popout
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  pic.style.transform = "translateZ(150px) rotateY(-360deg)";
  title.style.transform = "translateZ(135px) rotateX(-360deg)";
  description.style.transform = "translateZ(130px)";
  choices.style.transform = "translateZ(120px)";
  Decide.style.transform = "translateZ(110px)";
});

//Animate in
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  card.style.transition = "none";
  pic.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  choices.style.transform = "translateZ(0px)";
  Decide.style.transform = "translateZ(0px)";
});
