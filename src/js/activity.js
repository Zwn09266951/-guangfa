
var windowhref = window.location.href;
var activity = windowhref.indexOf('activity.html');
var activity2 = windowhref.indexOf('activity2.html');
var activity3 = windowhref.indexOf('activity3.html');
var activity4 = windowhref.indexOf('activity4.html');
if (activity !== -1) {
  getlist(GET_IACTIVE);
}
if (activity2 !== -1) {
  getlist(GET_EACTIVE);
}
if (activity3 !== -1) {
  getlist(GET_PAPER);
}
if (activity4 !== -1) {
  getlist(GET_MACTIVE);
}

$('.mune-top--list div').each(function() {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.mune-bottom').eq(index).show().siblings().hide();
  });
});
$('.mune-bottom--list').each(function() {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

$('.zfhd').click(function(event) {
  window.location.href = 'activity.html';
  getlist(GET_IACTIVE);
});
$('.tjhd').click(function(event) {
  window.location.href = 'activity2.html';
  getlist(GET_EACTIVE);
});
$('.tjdb').click(function(event) {
  window.location.href = 'activity3.html';
  getlist(GET_PAPER);
});
$('.fxqzl').click(function(event) {
  window.location.href = 'activity4.html';
  getlist(GET_MACTIVE);
});
