function drop() {
    var x = document.querySelector('.dropdown');
    if (x.style.display === 'block' || x.style.display === '') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

var phlink = document.getElementById("phlink");

phlink.addEventListener("click", phonelinkfunc);

function phonelinkfunc() {
    window.open("D:\\7th sem\\phone-selec\\main.html", "_blank");
}
