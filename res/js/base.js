//movimento sfondo
var scrollSpeed = 20;
var current = 0;
var direction = 'w';
function bgscroll() {
    current -= 1;
    $('body').css("backgroundPosition", (direction == 'h') ? current + "px 0" : "0 " + current + "px");

}
setInterval("bgscroll()", scrollSpeed);
//----------------------------------------------------