function menu_home() {
    
    document.getElementById('menu').innerHTML = "home";
}
function menu_downloads() {
    
    document.getElementById('menu').innerHTML = "down";
}
function menu_docs() {
    
    document.getElementById('menu').innerHTML = "docs";
}

function time() {
    t = new Date().toLocaleTimeString();
    d = new Date().toDateString();
    var time = d + ", " + t;
    document.getElementById('time').innerHTML = time;
}
setInterval(time, 1000);

