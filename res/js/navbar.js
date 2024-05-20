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
    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.75)"
}, {
    width: '80%',
    marginInline: '10%',
    borderRadius: '300px',
    position: 'fixed',
    marginTop: '2%',
    boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.75)"
});
