"use strict";

console.log(gsap.version);
// 3.12.5

gsap.to("#image", {
    delay: 1,
    x: 350,
    y: 250,
    scaleX: 4,
    scaleY: 4
});