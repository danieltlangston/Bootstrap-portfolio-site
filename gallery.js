
const tl = gsap.timeline();

tl.to(".galleryimage", {duration: .5, y:-25, ease: " sine.in", stagger:.25, opacity: 1});
tl.to(".info", {duration: .5, ease: " sine.in", stagger:.25, opacity: 1} );