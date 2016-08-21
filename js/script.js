$('.scrollspy').scrollSpy();



NProgress.start();

$(window).load(function() {
    NProgress.done();
});


var options = [{
    selector: '#staggered-test',
    offset: 400,
    callback: function(el) {
        Materialize.showStaggeredList($(el));
    }
}];


var getY = function() {
    var offsety = window.pageYOffset;
    return offsety;
};

getY();


window.addEventListener('scroll', function() {
    var y = getY();

    if (y >= 50) {
        $("#homepage-navigation").addClass("no__trans");
    } else {
        $("#homepage-navigation").removeClass("no__trans");
    }
});


$(document).ready(function() {
    $(".button-collapse").sideNav();
});
