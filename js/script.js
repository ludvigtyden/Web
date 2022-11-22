

function menu_home() {

    document.getElementById('menu').innerHTML = "Home";

}

function menu_downloads() {
    
    document.getElementById('menu').innerHTML = "Downloads";
}
function menu_docs() {
    
    document.getElementById('menu').innerHTML = "Documents";
}

function time() {
    t = new Date().toLocaleTimeString();
    d = new Date().toDateString();
    var time = d + ", " + t;
    document.getElementById('time').innerHTML = time;

    
}
setInterval(time, 1000);

