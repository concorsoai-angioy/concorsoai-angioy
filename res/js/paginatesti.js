/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById(id).classList.toggle("showclick");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtnclick')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-click");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showclick')) {
        openDropdown.classList.remove('showclick');
      }
    }
  }
}

gsap.registerPlugin(ScrollTrigger);

let tx = gsap.timeline({
  scrollTrigger: {
      trigger: '.col1',
      start: 'top 0%',
      end: 'bottom 2%',
      scrub: true,
      markers: true
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
  duration: 10,
  position: 'fixed',
  marginTop: '2%',
});
