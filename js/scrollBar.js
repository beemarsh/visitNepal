//******************************************* */
// For scroll progress Bar
document.addEventListener('scroll',function(){
    var maxPos=document.body.offsetHeight-screen.height;//Maximum scrollable height
    var pagePos=window.pageYOffset;
    var percentOfProgress=(pagePos/maxPos)*100;
    document.querySelector('.scrollBar').style.width=percentOfProgress+'%';
})