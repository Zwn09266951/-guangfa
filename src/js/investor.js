var windowhref = window.location.href;
var investor = windowhref.indexOf('investor.html');
var investor2 = windowhref.indexOf('investor2.html');
if (investor !== -1) {
  getlist(GET_FAIR);
}
if (investor2 !== -1) {
  getlist(GET_FAITH);
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

$('.gpzsb').click(function(event) {
  window.location.href = 'investor.html';
  getlist(GET_FAIR);
});
$('.cxjsxchd').click(function(event) {
  window.location.href = 'investor2.html';
  getlist(GET_FAITH);
});
