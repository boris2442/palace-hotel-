// partie destinee au scrollReveal

const sr = ScrollReveal({
  duration: 1500,
  origin: "top",
  distance: "30px",
  reset: true,
});
sr.reveal(
  ".first-section, .second-section, .third-section, .inscription, .fourth-section, .copy",
  { interval: 200 }
);

// partie du code du menu burger

const burger = document.querySelector(".bars");
const rem = document.querySelector(".remov");
const navigation = document.querySelector("header ul");

burger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  navigation.classList.remove("active");
  burger.style.display = "block";
});

// partie destinee a la librairie typewriter

const child = document.querySelector(".child-title");
const typewriter = new Typewriter(child, {
  loop: true,
  delay: 100,
})
  .typeString("Un lieu unique pour un séjour unique")
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(2000)
  .start();

// decouverte
const decouvert = document.querySelector(".decouverte");
const app = new Typewriter(decouvert, {
  loop: true,
  delay: 150,
})
  .typeString("et à decouvrir")
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(2000)
  .start();

// partie destinee a ajout du style lors du defiement

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header ul li a");
console.log(links);
const scrollActive = () => {
  sections.forEach(section => {
    let height = section.offsetHeight;
    let top = section.offsetTop;
    let id = section.getAttribute("id");
    let scrolls = window.scrollY;
    if (scrolls >= top - 300 && scrolls < top + height) {
      links.forEach(link => {
        link.classList.remove("active-link");
      });
      let recuperationId = document.querySelector(`header ul li a[href*=${id}]`);
      recuperationId.classList.add("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// chargement  de la page
window.onload = function() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.loader').style.transition='5s ease-out'
};


// const darkMode=document.querySelector(".dark");
// darkMode.addEventListener("click", ()=>{
//   document.documentElement.style.setProperty('--color1', ' #e0e0e0')
//   document.documentElement.style.setProperty('--color2', ' #3a3a3a')
//   document.documentElement.style.setProperty('--color3', ' #d1bebe ')
//   document.documentElement.style.setProperty('--color4', ' #121212')
//   document.documentElement.style.setProperty('--color5', ' rgb(200, 200, 200)')
//   document.documentElement.style.setProperty('--color6', ' #1c1b1b')
// });

const firstPara=document.querySelector(".first-para")
const darkToggleButton = document.querySelector(".dark");

darkToggleButton.addEventListener("click", ()=>{
document.body.classList.toggle("dark-mode")
burger.style.color='var(--color1)'

darkToggleButton.style.color='var(--color1)'
darkToggleButton.classList.toggle('darkToggleButton')
// firstPara.class .toggle("first-para2")
  

});