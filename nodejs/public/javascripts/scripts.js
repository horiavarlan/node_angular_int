(function($){
    $('document').ready(function(){
        $('.contact-form').submit(function(e){
            e.preventDefault();
            let data = $(e.target).serializeArray();
            console.log(data);
            $.post({
                url:"api/contact",
                data: data
            }, function(data){
                if (data.success === true){
                    $('.form-alert').html(data.message).addClass('alert-success').removeClass('hidden');
                } else {
                    $('.form-alert').html(data.message).addClass('alert-danger').removeClass('hidden');
                }
            });
        });
    }); 
})(jQuery);