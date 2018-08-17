function show(id) {
   $("#full-"+id).fadeIn("slow");
   $("#but-"+id).hide();
}

function less(id) {
   $("#full-"+id).fadeOut(600);

   $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 300);

    $("#but-"+id).show("slow");
}
