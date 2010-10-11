$(function() {
    $('.iframe').live('showoff:show', function(event) {
        $(this).find('iframe').attr('height', $(this).parent().outerHeight(true)+'px');
    });
});
