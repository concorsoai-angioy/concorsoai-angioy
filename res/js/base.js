//movimento sfondo
var scrollSpeed = 20;
var current = 0;
var direction = 'w';
function bgscroll() {
    current -= 1;
    $('body').css("backgroundPosition", (direction == 'h') ? current + "px 0" : "0 " + current + "px");
}
window.onload = function() {
    setInterval("bgscroll()", scrollSpeed);
};

function darkmode(flag) {

    if(flag){
        var palette = ["#E6E6E6", "#000", "#E6E6E6", "#001D4A", "#0084e7", "#E6E6E6", "#FFB60A", "#FFB60A", "#040549", "#060f24"];
    }else{
        var palette = ["#E6E6E6", "#000", "#E6E6E6", "#001D4A", "#0084e7", "#E6E6E6", "#FFB60A", "#FFB60A", "#040549", "#060f24"];
    }

    document.documentElement.style.setProperty('--testo', '#FFB60A');
    document.documentElement.style.setProperty('--testo2', '#0084e7');
    document.documentElement.style.setProperty('--sfondo', '#001D4A');
    document.documentElement.style.setProperty('--sfondoDiv', '#E6E6E6');
    document.documentElement.style.setProperty('--sfondoDiv2', '#000');
    document.documentElement.style.setProperty('--titoli', '#FFB60A');
    document.documentElement.style.setProperty('--dettagli', '#E6E6E6');
    document.documentElement.style.setProperty('--backbutton', '#E6E6E6');
    document.documentElement.style.setProperty('--sfondonav', '#060f24');
    document.documentElement.style.setProperty('--sfondonav2', '#040549');
}

// Esegui la funzione quando necessar
