
const tl = gsap.timeline();

tl.to(".fadeIn", {delay: .75, duration: .5, y:-25, ease: " sine.in", stagger:.1, opacity: 1});
tl.to(".fadeIn", {duration: .25, ease: " sine.in", stagger:.1, opacity: 1} );