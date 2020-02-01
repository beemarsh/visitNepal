//Initial Vars
var initCount=0;
layer3Slider(initCount);//Initially execute the function


//Functions
function layer3Slider(sliderCount){
    var selectSlider=document.getElementsByClassName('lay3Slider');
    for(i=0;i<selectSlider.length;i++){
        selectSlider[i].style.display='none';
    }
    $(selectSlider[sliderCount]).fadeIn();
    selectSlider[sliderCount].style.display='flex';
    makeActiveDot(sliderCount);
}
function makeActiveDot(classArr){
    var selectDot=document.getElementsByClassName('lay3SliderRounds');
    for(i=0;i<selectDot.length;i++){
        selectDot[i].classList.remove('lay3ActiveRound');
    }
    selectDot[classArr].style.display='block';
    selectDot[classArr].classList.add('lay3ActiveRound');
}