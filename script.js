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