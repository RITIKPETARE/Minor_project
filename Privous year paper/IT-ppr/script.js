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