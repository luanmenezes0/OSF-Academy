$(".fa-bars").click(function() { //selects the menu button on mobile
    $(".firstLevelMenu").slideToggle(); //make the primary items appear
    $(".secondLevelMenu").css("display", "none"); //avoid that secondary items items appear when the primary are clicked
});


$(".firstLevelMenu .fa-sort-desc").click(function() { //selects primary item SERVICES
    $(".secondLevelMenu > ul").slideToggle(); //make the options appear
    event.stopPropagation();
    $("li li li").css("display", "none"); //avoid the inner list to collapse
});

//selects one of the secondary options
//make the third level appear

$(".secondLevelMenu .fa-sort-desc").click(function() { 
    $(".thirdLevelMenu > ul").slideToggle(); 
});


$("ul li").click(function() { //um dos drops
    $("ul ul").slideUp(); //os itens do outro drop sobem
    $(this).find('ul').slideToggle(); //desce a lista do drop clicado
});

$(window).resize(function() {
    if($(window).width() > 768) {
          $("ul").removeAttr('style');
    }
});