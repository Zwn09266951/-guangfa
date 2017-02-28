
//知识中心 文章
//
//
//第一次进入知识中心获取文章列表
var windowhref = window.location.href;
var center = windowhref.indexOf('center.html');
var center2 = windowhref.indexOf('center2.html');
var center3 = windowhref.indexOf('center3.html');

var nfin = windowhref.indexOf('nfin');
var nfarm = windowhref.indexOf('nfarm');
var nche = windowhref.indexOf('nche');
var npre = windowhref.indexOf('npre');
var ncolour = windowhref.indexOf('ncolour');
var nblack = windowhref.indexOf('nblack');

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
  console.log(url3);
}


if (nblack !== -1) {
  getlist(GET_GUIDE);
  $('.mune-bottom--list').eq(0).addClass('active').siblings().removeClass('active');
}
if (ncolour !== -1) {
  getlist(GET_NCOLOUR);
  $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
}
if (npre !== -1) {
  getlist(GET_NPRE);
  $('.mune-bottom--list').eq(2).addClass('active').siblings().removeClass('active');
}
if (nche !== -1) {
  getlist(GET_NCHE);
  $('.mune-bottom--list').eq(3).addClass('active').siblings().removeClass('active');
}
if (nfarm !== -1) {
  getlist(GET_NFARM);
  $('.mune-bottom--list').eq(4).addClass('active').siblings().removeClass('active');
}
if (nfin !== -1) {
  getlist(GET_NFIN);
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
$('#nblack').click(function(event) {
  getlist(GET_GUIDE);
});
$('#ncolour').click(function(event) {
  getlist(GET_NCOLOUR);
});
$('#npre').click(function(event) {
  getlist(GET_NPRE);
});
$('#nche').click(function(event) {
  getlist(GET_NCHE);
});
$('#nfarm').click(function(event) {
  getlist(GET_NFARM);
});
$('#nfin').click(function(event) {
  getlist(GET_NFIN);
});
