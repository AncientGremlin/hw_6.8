//вообще можно через switch-case, но вдруг нужно показать removeEventListener

const trafficLightElements = document.querySelectorAll('.trafficLight');

trafficLightElements.forEach((e) => {
    e.addEventListener('click', makeGreen);
});

function makeGreen() {
    trafficLightElements.forEach((e) => {
        e.style.background = ('black');
        e.removeEventListener('click', makeGreen);
        e.addEventListener('click', makeYellow);
    });
    trafficLightElements[2].style.background=('green');
    
}
function makeYellow() {
    trafficLightElements.forEach((e) => {
        e.style.background = ('black');
        e.removeEventListener('click', makeYellow);
        e.addEventListener('click', makeRed);
    });
    trafficLightElements[1].style.background=('yellow');
}
function makeRed() {
    trafficLightElements.forEach((e) => {
        e.style.background = ('black');
        e.removeEventListener('click', makeRed);
        e.addEventListener('click', makeGreen);
    });
    trafficLightElements[0].style.background=('red');
}
