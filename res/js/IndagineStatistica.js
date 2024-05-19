inclus
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.block',
        //start: '20% center',
        start: 'top center',
        end: 'bottom center',
        //end: 'bottom 60%',
        scrub: true,
        markers: true
    }
});

tl.to('.block', {
    opacity: 1,
    duration: 2,
    pinSpacing: true, // se div padre è flex
    scale: 1
});