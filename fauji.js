var more = document.querySelector("#more i")
var cross = document.querySelector("#full i")
var hom = document.querySelector("#full #ho a")

var tl = gsap.timeline()

tl.to("#full",{
    top:"0",
    duration:0.5
})
tl.from("#full h1",{
    y:150,
    duration:0.3,
    stagger:0.1,
    opacity:0
})
tl.from("#full i",{

})
tl.pause()

more.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
hom.addEventListener("click",function(){
    tl.reverse()
})