$(document).ready(function () {
    console.log("doc ready doofus");
    //if js enabled then changing to js style sheet.
    $('link').attr('href','style_js.css');

    var pageNo=0;
//on clicking elements of class 'page' activating the function to set the animation going, reducing the delay to 10ms and setting the z-index of the next element to 1 after a window time delay.
$('.page').on('click',function () {
    $(this).addClass('pageAnimation').css('animation-delay','10ms');
    pageNo+=1;
    window.setTimeout(setZ,400);
    function setZ(){
    $('#page'+pageNo).css('z-index',1);
    }
})

    //returning book to ready state when back cover div is clicked.
    var zIndex=0;
    $('.backcover').on('click',function () {
        pageNo=0;
        $('.backcover').css('z-index',0);
        $('.page').each(function () {
           $(this).removeClass('pageAnimation');
           if($(this).attr('class')==='page frontcover'){
               $(this).css('z-index',10);
           }
           $(this).css('z-index',zIndex);
            zIndex-=1;
        });
    })


})