
//知识中心 文章
//
//
//第一次进入知识中心获取文章列表
var windowhref = window.location.href;
var center = windowhref.indexOf('center.html');
var center2 = windowhref.indexOf('center2.html');
var center3 = windowhref.indexOf('center3.html');
var xzfg = windowhref.indexOf('xzfg');
var url = windowhref.substring(center + 1);
var url2 = windowhref.substring(center2 + 1);
var url3 = windowhref.substring(center3);
console.log(xzfg);
if (center !== -1) {
  getlist(GET_GUIDE);
}
if (center2 !== -1) {
  getlist(GET_ARTICLE);
}
if (center3 !== -1) {
  getlist(GET_STATUTES);
  console.log(url3);
}

if (xzfg !== -1) {
  getlist(GET_ALOW);
  console.log('aa');
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
