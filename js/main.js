(function ($) {
    "use strict";
    
    $('#form').submit(function(e) {

        const form = $(this);
        let formdata = null;
        if(window.FormData){
            formdata = new FormData(form[0]);
        }

        $.ajax({
            type        : 'POST',
            url         : '../post.php',
            cache       : false,
            data        : formdata ? formdata : form.serialize(),
            contentType : false,
            processData : false,
            dataType    : 'json',

            success: function(response) {
                //TARGET THE MESSAGES DIV IN THE MODAL
                if(response.type == 'success') {
                    $('#thanks').removeClass('hide').fadeOut(5000);
                    form[0].reset();
                } else {
                    $('#fail').removeClass('hide').fadeOut(5000);
                    form[0].reset();
                }
            }
        });
        e.preventDefault();
    });
    
})(jQuery);

