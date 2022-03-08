var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navlinks');


hamburger.addEventListener('click', function () {

    navLinks.classList.toggle('show');

})

function elementinviewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );

}

window.onscroll = function () {
    console.log('called')
    var el = document.getElementById('section-one');
    if (elementinviewport2(el) == true) {
        console.log('inviewport');
        if (el.classList.contains("loadcontent") == false) {
            el.classList.add("loadcontent");
        }
    }

    var el2 = document.getElementById('section-two');
    if (elementinviewport2(el2) == true) {
        console.log('inviewport');
        if (el2.classList.contains("loadcontent") == false) {
            el2.classList.add("loadcontent");
        }
    }

    var el3 = document.getElementById('section-three');
    if (elementinviewport2(el3) == true) {
        console.log('inviewport');
        if (el3.classList.contains("loadcontent") == false) {
            el3.classList.add("loadcontent");
        }
    }

    var el4 = document.getElementById('section-four');
    if (elementinviewport2(el4) == true) {
        console.log('inviewport');
        if (el4.classList.contains("loadcontent") == false) {
            el4.classList.add("loadcontent");
        }
    }

    var el5 = document.getElementById('section-five');
    if (elementinviewport2(el5) == true) {
        console.log('inviewport');
        if (el5.classList.contains("loadcontent") == false) {
            el5.classList.add("loadcontent");
        }
    }







}