// For last parallax like
checkvalue=false;
$(document).ready(function(){
    $(window).scroll(function(){
        checkScrollLayer7();
});
})

function checkScrollLayer7(){//To find the user position and make the position of the div Fixed
    var pageYAxis=window.pageYOffset;
    if(pageYAxis>4400 & pageYAxis<5450){
        $('.layer7TextContainer').fadeIn();
        if(checkvalue==false){
            addFixedClass();
        }
    }else if(pageYAxis>5450){
        $('.layer7TextContainer').fadeOut();
        checkvalue=true;
    }else{
        removeFixedClasses();
        checkvalue=false;
        return;
    }
    manageTexts();
}
function addFixedClass(){//Add fixed classses to lay7 Text Container
    document.querySelector('.layer7TextContainer').classList.add('fixLay7Text');
    document.querySelector('.layer7VideoContainer').classList.add('manageLay7Img');
    document.querySelector('.layer8TextContainer').classList.add('fixLay8Text');
    document.querySelector('.layer8VideoContainer').classList.add('manageLay8Img');
}
function removeFixedClasses(){//Remove fixed class on Lay7 Text container
    document.querySelector('.layer7TextContainer').classList.remove('fixLay7Text');
    document.querySelector('.layer7VideoContainer').classList.remove('manageLay7Img');
    document.querySelector('.layer8TextContainer').classList.remove('fixLay8Text');
    document.querySelector('.layer8VideoContainer').classList.remove('manageLay8Img');
}
function manageTexts(){//To change text on scrolling
    var pageLoc=window.pageYOffset;
    if(pageLoc>4900&pageLoc<5560){
        $('.layer7TextContainer').addClass('newClass');
        $('.layer7TextContainer').html('Lit the Fire');
        $('.layer7TextContainer').removeClass('newClass');
    }else if(pageLoc>4000 & pageLoc<4900){
        $('.layer7TextContainer').html('Camp<br>Live<br>Explore');
        $('.layer7TextContainer').removeClass('newClass');
    }else{
        $('.layer7TextContainer').removeClass('newClass');
        return;
    }
}