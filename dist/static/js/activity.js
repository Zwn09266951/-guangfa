
//专项活动 文章
//
//
//第一次进入知识中心获取文章列表
$(function() {
  getlist(GET_IACTIVE);
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

$('.zfhd').click(function(event) {
  getlist(GET_IACTIVE);
});
$('.tjhd').click(function(event) {
  getlist(GET_EACTIVE);
});
$('.tjdb').click(function(event) {
  getlist(GET_PAPER);
});
$('.fxqzl').click(function(event) {
  getlist(GET_MACTIVE);
});
