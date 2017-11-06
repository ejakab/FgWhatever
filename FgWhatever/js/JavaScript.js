$(document).ready(function () {

    //Show Banner
    $(".main_image .desc").show(); //Show Banner
    


    //Toggle Teaser
    $("a.collapse").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("show");
    });


});//Close Function  