checkvalue=false;
$(document).ready(function(){
    $(window).scroll(function(){
        scrollAnimation();//To animate heading Bar on scroll
        checkScrollLayer7();
});
})

// List of Functions Only
function scrollAnimation(){//For sticky header Scrolling
    var pagePosition=window.pageYOffset;
    if(pagePosition>0){
        $('.outer-cover').addClass('scrollAnimation');//BGcolor Black
        $('.outer-cover').removeClass('removeScroll');//Rmv Bgcolor White
    }else{
        $('.outer-cover').addClass('removeScroll');//Add Bgcolor white
    }
}