"use strict";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panelsContainer = document.querySelector("#panels-container"),
  sections = gsap.utils.toArray(".panel"),
  navButtons = gsap.utils.toArray(".nav-link"),
  tween;

document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
        (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });

    // console.log(anchor); Aqui agarro el nav-link correcto
  });
});

/* Panels */
const panels = sections;
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: {
        min: 0.1,
        max: 0.1
      },
    },
    end: () => "+=5000",
  },
});

gsap.to("#floating-button", {
  autoAlpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#experience",
    start: "bottom bottom",
    scrub: true,
  },
});

gsap.to("#floating-button", {
  autoAlpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#experience",
    start: "bottom bottom",
    scrub: true,
  },
});

gsap.to(".social-icons-floating", {
  autoAlpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#experience",
    start: "bottom bottom",
    scrub: true,
  },
});