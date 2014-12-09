$("#home").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#hometop").position().top
    });
});
$("#aboutme").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#abouttop").position().top
    });
});
$("#service").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#servicetop").position().top
    });
});
$("#mywork").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#myworktop").position().top
    });
});
$("#contact").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#contactid").position().top
    });
});