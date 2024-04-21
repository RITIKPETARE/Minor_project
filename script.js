function loadingAnimation(){
    gsap.from("#Cpart1",{
        y:100,
        opacity: 0,
        delay :0.9,
        duration :0.9,
        stagger:0.23,
    })
    

}
loadingAnimation()


function GsapAnimation(){
    gsap.from("#image2", {
        scale:0.8,
        duration:2,
        delay:1,
        opacity: 0,
    })
    
    gsap.from("#png1", {
        scale:0.8,
        duration:2,
        delay:1,
        opacity: 0,
    })
    
    
    gsap.from("#png2", {
        scale:0.8,
        duration:2,
        delay:1,
        opacity: 0,
    })
    
    gsap.from(".Cpart1 h1", {
        y:100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    gsap.from(".Cpart1 p", {
        y:100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    gsap.from(".Lpart1 .comment", {
        x:-100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    
    gsap.from(".Rpart1 .wordbox", {
        x:100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    
    gsap.from("#nav", {
        y:-100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    gsap.from(".Cpart1 .rotate-b", {
        y:100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
    gsap.from(".Cpart1 .scroll", {
        y:100,
            opacity: 0,
            delay :0.9,
            duration :0.9,
            stagger:0.23,
    
    })
}
GsapAnimation()


document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelector("#main").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(1)",
    })
})


document.querySelector("footer").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(0)",
    })
})

document.querySelector("footer").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%, -50%) scale(1)",
    })
})