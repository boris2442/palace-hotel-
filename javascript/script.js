// partie destinee au scrollReveal

const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})
sr.reveal(".first-section, .second-section, .third-section, .inscription, .fourth-section, .copy", {interval:200})


// partie du code du menu burger

const burger=document.querySelector(".bars");
const rem=document.querySelector(".remov");
const navigation=document.querySelector("header ul");

burger.addEventListener("click", ()=>{
    navigation.classList.toggle("active")
   
})
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active")
    burger.style.display='block'
})