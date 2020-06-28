$(function () {
  $('a[href^=#]').click(function () {
    var adjust = -500;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'linear');
    return false;
  });
});