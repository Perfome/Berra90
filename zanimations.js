gsap.from(".glass-container", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

function animateMessage(el) {
  if (window.matchMedia("(prefers-reduced-motion)").matches) return;
  gsap.from(el, {
    opacity: 0,
    y: 10,
    duration: 0.4,
    ease: "power2.out"
  });
}
