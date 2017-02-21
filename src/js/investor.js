
//专项活动 文章
//
//
//第一次进入知识中心获取文章列表
$(function() {
  getlist(GET_FAIR);
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

$('.gpzsb').click(function(event) {
  getlist(GET_FAIR);
});
$('.cxjsxchd').click(function(event) {
  getlist(GET_FAITH);
});
