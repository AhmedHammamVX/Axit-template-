$( document ).ready(function() {
    $('.list-tabs li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var div_id = $(this).attr('id');
        $('.tabs-content .content > div').hide();
        $(div_id).show();
    });
});