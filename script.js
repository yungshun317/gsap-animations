"use strict";

console.log(gsap.version);
// 3.12.5

/*
gsap.to("#image", {
    delay: 1,
    x: 350,
    y: 250,
    scaleX: 4,
    scaleY: 4
});
*/

/*
gsap.to(".rect", {
    delay: 1,
    duration: 3,
    rotate: 2880,
    skewX: 45,
    fill: "yellow",
    ease: "power1.in"
});
*/

/*
gsap.to("#b", {
    delay: 2,
    duration: 3,
    x: 700,
    repeat: -1
});

gsap.from("#g", {
    delay: 2,
    duration: 3,
    x: 700,
    repeat: -1
});

gsap.fromTo("#r", {
    x: 200,
}, {
    delay: 2,
    duration: 3,
    x: 700,
    repeat: -1
});
*/

let tl = gsap.timeline({
    defaults: {
        duration: 2,
        ease: "power1.inOut",
        // Repeat cycle runs in opposite direction
        yoyo: true,
        // Number of times the animation repeats
        repeat: -1
    }
})
    .to("#cr1", { x: 500 })
    .to("#cr2", { x: 461.94, y: -191.64 }, "<0.25")
    .to("#cr3", { x: 353.55, y: -353.56 }, "<0.25")
    .to("#cr4", { x: 191.34, y: -461.94 }, "<0.25")
    // .to("#cr5", { y: -500 }, "<0.25")
    // .to("#cr6", { x: -191.35, y: -461.94 }, "<0.25")
    // .to("#cr7", { x: -353.55, y: -353.56 }, "<0.25")
    // .to("#cr8", { x: -461.94, y: -191.34 }, "<0.25")
    .to("#cr5", { y: -500 }, "lb")
    .to("#cr6", { x: -191.35, y: -461.94 }, "lb-=0.25")
    .to("#cr7", { x: -353.55, y: -353.56 }, "lb-=0.5")
    .to("#cr8", { x: -461.94, y: -191.34 }, "lb-=0.75")

document.addEventListener("click", function(e) {
    tl.reverse();
});
document.addEventListener("dblclick", function(e) {
    tl.play();
});