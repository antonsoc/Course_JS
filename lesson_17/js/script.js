$(document).ready(function() {
    $('a[href="#sheldure"], .main_btna, .main_btn').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').click(function() {
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });
})