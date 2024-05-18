let tl = gsap.timeline({
    scrolltrigger: {
        trigger: '.container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true
    }
});

tl.to('.container', {
    opacity: 1
});
