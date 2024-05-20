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

var settings = JSON.parse(localStorage.getItem("settings") || "{}");

applyTheme()

function toggleTheme(){
    changeSetting("isDark", !settings.isDark)
    applyTheme()
}

function saveSettings(){
    localStorage.setItem("settings", JSON.stringify(settings))
}

function changeSetting(settingName, value){
    settings[settingName] = value
    saveSettings()
}

function applyTheme(){
    if(settings.isDark){
        var palette = ["#E6E6E6", "#E6E6E6", "#1B262C",  "#001D4A",  "#1c6495",  "#1B262C",  "#E6E6E6",  "#E6E6E6",  "#FFB60A",  "#FFB60A", "#040549", "#060f24"];
        $('body').css("backgroundImage", "../../res/img/bkg2.svg");
    }else{
        var palette = ["#E6E6E6", "#000", "#E6E6E6",  "#001D4A",  "#0084e7",  "#E6E6E6",  "#0084e7",  "#E6E6E6",  "#FFB60A", "#FFB60A", "#040549", "#060f24"];
        $('body').css("backgroundImage", "../../res/img/bkg1.svg");
    }

    document.documentElement.style.setProperty('--testo', palette[0]);
    document.documentElement.style.setProperty('--testo2', palette[1]);
    document.documentElement.style.setProperty('--sfondo', palette[2]);
    document.documentElement.style.setProperty('--sfondoDiv', palette[3]);
    document.documentElement.style.setProperty('--sfondoDiv2', palette[4]);
    document.documentElement.style.setProperty('--sfondoTestoFooter', palette[5]);
    document.documentElement.style.setProperty('--testoFooter', palette[6]);
    document.documentElement.style.setProperty('--titoli', palette[7]);
    document.documentElement.style.setProperty('--dettagli', palette[8]);
    document.documentElement.style.setProperty('--backbutton', palette[9]);
    document.documentElement.style.setProperty('--sfondonav', palette[10]);
    document.documentElement.style.setProperty('--sfondonav2', palette[11]);
}
