gsap.registerPlugin(ScrollTrigger);

let tx = gsap.timeline({
    scrollTrigger: {
        trigger: 'header',
        start: 'top 0%',
        end: 'bottom 5%',
        scrub: 1,
        markers: false
    }
});

tx.fromTo('header', {
    width: '100%',
    marginInline: '0%',
    borderRadius: '0px',
    position: 'none',
}, {
    width: '80%',
    marginInline: '10%',
    borderRadius: '300px',
    position: 'fixed',
    marginTop: '2%'
});
