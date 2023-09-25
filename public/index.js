const offset = () => {
    width = $(".decorations .stats").height();
    $(".decorations .offset").css("transform", "translateY(-" + width + "px)");
    $(".decorative-text").css("margin-top", "-" + $(".decorations #waves").height()/2 + "px");

    height2 = $("#shiftedjoin").height();
    $("#plsjoinbg").css("transform", "translateY(-" + height2*-10000/100 + "px)");
}


$(offset);
$(window).on('resize', offset);