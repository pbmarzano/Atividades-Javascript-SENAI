
document.cookie = 'firstname=pedro; expires=' + new Date(2021, 0, 1).toUTCString()
document.cookie = 'lastname=barros; expires=' + new Date(2021, 0, 1).toUTCString()


function showWidth (){
    const container1 = document.getElementById('container1');
    container1.innerHTML += screen.width + 'px';
}

function showAvailWidth(){
    const container2 = document.getElementById('container2');
    container2.innerHTML += screen.availWidth + 'px';
}   

function showHeight () {
    const container3 = document.getElementById('container3');
    container3.innerHTML += screen.height + 'px';
}

function showAvailHeight () {
    const container4 = document.getElementById('container4');
    container4.innerHTML += screen.availHeight +'px';
}

// window.addEventListener('load', medir)