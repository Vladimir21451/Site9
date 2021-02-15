
const trafficLightEl = document.querySelector('#trafficLight');
const ntb = document.querySelector('#ntb');  
  
function makeGreen() {
    trafficLightEl.style.background = ('lightgreen');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);
  
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

//trafficLightEl.addEventListener('click', makeYellow());

function makeRed() {
    if (flag == false){
        flag = true;
        return true;}
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}
    function goFirst(){
        trafficLightEl.style.background = ('black');    
    }
trafficLightEl.addEventListener('click', makeRed);
ntb.addEventListener('click', goFirst);