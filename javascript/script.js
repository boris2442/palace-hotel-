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

// partie destinee a la librairie typewriter

const child=document.querySelector(".child-title")
const typewriter= new Typewriter(child, {
    loop:true,
    delay:150
})
.typeString("Un lieu unique pour un séjour unique")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start()




// decouverte
const decouvert=document.querySelector(".decouverte")
const app=new Typewriter(decouvert, {
    loop:true,
    delay:150
})
.typeString("et à decouvrir")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start()