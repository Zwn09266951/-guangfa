var windowhref = window.location.href;
var center = windowhref.indexOf('center.html');
var center2 = windowhref.indexOf('center2.html');
var center3 = windowhref.indexOf('center3.html');
var fjfl = windowhref.indexOf('fjfl');
var xzfg = windowhref.indexOf('xzfg');
var bmgz = windowhref.indexOf('bmgz');
var jysgz = windowhref.indexOf('jysgz');
var zlgz = windowhref.indexOf('zlgz');
var fxq = windowhref.indexOf('fxq');
var pfgz = windowhref.indexOf('pfgz');

var url = windowhref.substring(center + 1);
var url2 = windowhref.substring(center2 + 1);
var url3 = windowhref.substring(center3);


if (url3 = 'center.html') {
  getlist(GET_STATUTES);
}
if (fjfl !== -1) {
  getlist(GET_STATUTES);
  $('.mune-bottom--list').eq(0).addClass('active').siblings().removeClass('active');
}
if (xzfg !== -1) {
  getlist(GET_ALOW);
  $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
}
if (bmgz !== -1) {
  getlist(GET_DLOW);
  $('.mune-bottom--list').eq(2).addClass('active').siblings().removeClass('active');
}
if (jysgz !== -1) {
  getlist(GET_ELOW);
  $('.mune-bottom--list').eq(3).addClass('active').siblings().removeClass('active');
}
if (zlgz !== -1) {
  getlist(GET_SRULE);
  $('.mune-bottom--list').eq(4).addClass('active').siblings().removeClass('active');
}
if (fxq !== -1) {
  getlist(GET_MRULE);
  $('.mune-bottom--list').eq(5).addClass('active').siblings().removeClass('active');
}
if (pfgz !== -1) {
  getlist(GET_LRULE);
  $('.mune-bottom--list').eq(6).addClass('active').siblings().removeClass('active');
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


/* 新手入门 */
$('.guide').click(function(event) {
  // getlist(GET_GUIDE);
  window.location.href = 'center.html';
});
/* 进阶知识 */
$('.know').click(function(event) {
  // getlist(GET_ARTICLE);
  window.location.href = 'center2.html';
});
/* 政策法规 */
$('.statute').click(function(event) {
  // getlist(GET_STATUTES);
  window.location.href = 'center3.html';
});
$('#gjfl').click(function(event) {
  getlist(GET_STATUTES);
});
$('#xzfg').click(function(event) {
  getlist(GET_ALOW);
});
$('#bmgz').click(function(event) {
  getlist(GET_DLOW);
});
$('#jysgz').click(function(event) {
  getlist(GET_ELOW);
});
$('#zlgz').click(function(event) {
  getlist(GET_SRULE);
});
$('#fxq').click(function(event) {
  getlist(GET_MRULE);
});
$('#pfgz').click(function(event) {
  getlist(GET_LRULE);
});
