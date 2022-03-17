
const tl = gsap.timeline();

tl.to(".fadeIn", {delay: .75, duration: .75, y:-25, ease: " sine.in", stagger:.25, opacity: 1});
tl.to(".fadeIn", {duration: .5, ease: " sine.in", stagger:.25, opacity: 1} );