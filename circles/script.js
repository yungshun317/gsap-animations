"use strict";

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