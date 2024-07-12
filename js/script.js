let innerWidth = window.screen.width;

let tween = gsap.to('.text1', {
    x: innerWidth,
    

})
let tween2 = gsap.to(".text2", {
    x: -innerWidth,
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





