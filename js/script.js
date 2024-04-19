let tween = gsap.to('.text1', {
    x: 2019,
    

})
let tween2 = gsap.to(".text2", {
    x: -2019,
})

ScrollTrigger.create({
    trigger: ".textWrap",
    markers: true,
    start: "top 30%",
    end: "bottom center",
    animation: tween,
    scrub: 2,
})
ScrollTrigger.create({
    trigger: ".textWrap",
    markers: true,
    start: "top 30%",
    end: "bottom center",
    animation: tween2,
    scrub: 2,
})

gsap.set('.textWrap',{
    y: 300,
})
