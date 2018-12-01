$(document).ready(function () {

    $('.bauble').on('click', function () {
        $(this).addClass('baubleAni').css('animation-delay','10ms');
        $(this).css('animation-fill-mode','forwards');
    });

    $('.bauble').hover(function () {
        $(this).addClass('baubleAni').css('animation-delay','10ms');
        $(this).css('animation-fill-mode','forwards');
    }
    ,function () {
        window.setTimeout(retTheBall,3000);
        });

    function retTheBall(){
        $(this).css('animation-fill-mode','backwards');
    }


});





$('.page').on('click',function () {
    $(this).addClass('pageAnimation').css('animation-delay','10ms');
    pageNo+=1;
    window.setTimeout(setZ,400);
    function setZ(){
        $('#page'+pageNo).css('z-index',1);
    }
})