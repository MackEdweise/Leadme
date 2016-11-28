/**
 * Created by marcusedwards on 2016-11-15.
 */

$(document).ready(function() {
    if($(window).width() < 770) {
        $('.watch').hide();
    }
    $(window).resize(function () {
        if($(window).width() < 770) {
            $('header').css('height', '100vh');
            $('.watch').hide();
        }
        else{
            $('.watch').show();
        }
    });
    $("[data-toggle='modal']").modal('hide');
});