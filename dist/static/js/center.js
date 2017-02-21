
//知识中心 文章
//
//
//第一次进入知识中心获取文章列表
$(function() {
  getlist(GET_GUIDE);
})

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
  getlist(GET_GUIDE);
});
/* 进阶知识 */
$('.know').click(function(event) {
  getlist(GET_ARTICLE);
});
/* 政策法规 */
$('.statute').click(function(event) {
  getlist(GET_STATUTES);
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
