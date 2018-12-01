$(document).ready(function () {
    console.log("doc ready doofus");

    var pageNo=0;
    var zindex=0;
    // $('.page').css('animation','none');
$('.page').on('click',function () {
    $(this).addClass('pageAnimation').css('animation-delay','10ms');
    pageNo+=1;
    zindex+=1; //z-index: -1;
    window.setTimeout(setZ,600);
    function setZ(){
    $('#page'+pageNo).css('z-index',zindex);
    // $('#page'+pageNo).attr('z-index',zindex);
    }
})



})