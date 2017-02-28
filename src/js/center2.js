
//知识中心 文章
//
//
//第一次进入知识中心获取文章列表
var windowhref = window.location.href;
var center = windowhref.indexOf('center.html');
var center2 = windowhref.indexOf('center2.html');
var center3 = windowhref.indexOf('center3.html');

var adfin = windowhref.indexOf('adfin');
var adfarm = windowhref.indexOf('adfarm');
var adche = windowhref.indexOf('adche');
var adpre = windowhref.indexOf('adpre');
var adcolour = windowhref.indexOf('adcolour');
var adblack = windowhref.indexOf('adblack');

var url = windowhref.substring(center + 1);
var url2 = windowhref.substring(center2 + 1);
var url3 = windowhref.substring(center3);

if (center !== -1) {
  getlist(GET_GUIDE);
}
if (center2 !== -1) {
  getlist(GET_ARTICLE);
}
if (center3 !== -1) {
  getlist(GET_STATUTES);

}
// 
// if (xzfg !== -1) {
//   getlist(GET_ALOW);
// }

if (adblack !== -1) {
  getlist(GET_ARTICLE);
  $('.mune-bottom--list').eq(0).addClass('active').siblings().removeClass('active');
}
if (adcolour !== -1) {
  getlist(GET_ADCOLOUR);
  $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
}
if (adpre !== -1) {
  getlist(GET_ADPRE);
  $('.mune-bottom--list').eq(2).addClass('active').siblings().removeClass('active');
}
if (adche !== -1) {
  getlist(GET_ADCHE);
  $('.mune-bottom--list').eq(3).addClass('active').siblings().removeClass('active');
}
if (adfarm !== -1) {
  getlist(GET_ADFARM);
  $('.mune-bottom--list').eq(4).addClass('active').siblings().removeClass('active');
}
if (adfin !== -1) {
  getlist(GET_ADFIN);
  $('.mune-bottom--list').eq(5).addClass('active').siblings().removeClass('active');
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
$('#adblack').click(function(event) {
  getlist(GET_ARTICLE);
});
$('#adcolour').click(function(event) {
  getlist(GET_ADCOLOUR);
});
$('#adpre').click(function(event) {
  getlist(GET_ADPRE);
});
$('#adche').click(function(event) {
  getlist(GET_ADCHE);
});
$('#adfarm').click(function(event) {
  getlist(GET_ADFARM);
});
$('#adfin').click(function(event) {
  getlist(GET_ADFIN);
});
