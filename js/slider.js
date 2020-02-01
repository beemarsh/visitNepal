// Initial Variables
sliderCount=0;
pauseVar=0;
//
$(document).ready(function(){
    imageSlider(sliderCount);//First Execution of Slider
    startAuto();//Automatically play at start
});

//For slider Functions Lists
function nextImage(){//When next button is clicked   
    if(autoSlide){/*Stop and Start Interval When user clicks next*/
        stopAuto();
        startAuto();
    }
    sliderCount+=1;
    if(sliderCount>=noOfImages){
        sliderCount=0;
    }
    imageSlider(sliderCount);
}
function prevImage(){//When PRevious Button is clicked
    if(autoSlide){/*Stop and Start Interval When user clicks previous*/
        stopAuto();
        startAuto();
    }
    sliderCount-=1;
    if(sliderCount<0){
        sliderCount=noOfImages-1;
    }
    imageSlider(sliderCount);
}
function imageSlider(imageCount){//Main slider Manager
    var containersList=document.getElementsByClassName('sliderContainerImg');
    var textList=document.getElementsByClassName('imgText');
    noOfImages=containersList.length;
    for(i=0;i<noOfImages;i++){
        containersList[i].style.display='none';
        textList[i].style.display='none';
    }
    var selectedElem=containersList[imageCount];
    $(selectedElem).fadeIn();//Fading in the slide
    var thisText=textList[imageCount];
    $(thisText).slideDown(1800);//For sliding text at first
    dotsManager(imageCount);
}
function dotsManager(count){//To make Active Dot big
    var dotsList=document.getElementsByClassName('rounds');
    for(i=0;i<dotsList.length;i++){
        dotsList[i].classList.remove('active-round');
    }
    dotsList[count].classList.add('active-round');
}
function startAuto(){
    autoSlide=setInterval(automaticSlideShow,14000);
}
function stopAuto(){
    clearInterval(autoSlide);
    autoSlide=false;//slideShow is paused
}
function automaticSlideShow(){
    nextImage();
}
function pause(){/*To start and stop the slider Interval*/
    pauseVar+=1;
    if(pauseVar%2==0){
        startAuto();
        $('#pause i').addClass('flaticon-pause').removeClass('flaticon-play');//Changing to pause
    }else{
        stopAuto();        
        $('#pause i').addClass('flaticon-play').removeClass('flaticon-pause');//Icon turns play
    }
}