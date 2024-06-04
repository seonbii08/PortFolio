let innerWidth = window.screen.width;

let tween = gsap.to('.text1', {
    x: innerWidth,
    

})
let tween2 = gsap.to(".text2", {
    x: -innerWidth,
})  

let backGroundColor = gsap.to(".backGround", {
    onStart: () => {
        document.querySelector(".backGround").style.opacity = 0;
    },
    backgroundColor: "red",
    toggleActions: "restart none reverse none",
}) 

ScrollTrigger.create({
    trigger: ".textWrap",
    // markers: true,
    start: "top 30%",
    end: "bottom center",
    animation: tween,
    scrub: 2,
})
ScrollTrigger.create({
    trigger: ".textWrap",
    // markers: true,
    start: "top 30%",
    end: "bottom center",
    animation: tween2,
    scrub: 2,
})

ScrollTrigger.create({
    trigger: ".portFolioWrap",
    markers: true,
    start: "top 30%",
    end: "bottom center",
    animation: backGroundColor,
})



