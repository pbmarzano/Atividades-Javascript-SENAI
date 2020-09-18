
var obj = document.getElementById('quad');
var ang=0;
var anima;

function gira() {
    obj.style.transform = "rotate("+ang+"deg)";
    ang++;
    if (ang>360) {
        ang=0;
    }
    anima = requestAnimationFrame(gira);
}

gira()
