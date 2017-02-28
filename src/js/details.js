//文章详情页
//
var windowhref = window.location.href;
var selectbyuserid = windowhref.indexOf('#');
var url = windowhref.substring(selectbyuserid+1);
_get('http://edu.gfqh.cn/index.php/detail/'+ url)
.then(function (res) {
  console.log(res);
  var detailsTitle = $('#detailsTitle');
  var detailsShare = $('#detailsShare');
  var detailsInfo = $('#detailsInfo');
  var detailsContent = $('#detailsContent');
  var detailsBar = $('.details-mune--bar');
  var xsBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='center.html'>知识中心</a><span>&gt;</span><a href='center.html'>新手入门</a>"
  var jjBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='center.html'>知识中心</a><span>&gt;</span><a href='center2.html'>进阶知识</a>"
  var zzBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='center.html'>知识中心</a><span>&gt;</span><a href='center3.html'>政策法规</a><span>&gt;</span>"
  var tzzBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='investor.html'>投资者保护</a><span>&gt;</span><a href='investor.html'>公平在身边</a>"
  var tzzhdBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='investor.html'>投资者保护</a><span>&gt;</span><a href='investor2.html'>诚信建设宣传活动</a>"

  var zfBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='activity.html'>专项活动</a><span>&gt;</span><a href='activity.html'>整非活动</a>"
  var tjspBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='activity.html'>专项活动</a><span>&gt;</span><a href='activity2.html'>投教活动</a>"
  var tjdbBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='activity.html'>专项活动</a><span>&gt;</span><a href='activity3.html'>投教读报</a>"
  var fxqBarhtml = "<a href='/'>首页</a><span>&gt;</span><a href='activity.html'>专项活动</a><span>&gt;</span><a href='activity4.html'>反洗钱专栏</a>"

  var article = res.d.article;
  var aa = $.parseHTML(article.content);
  detailsTitle.html(article.title);
  detailsShare.find('p').html(article.data);
  detailsInfo.find('b').html(article.excerpt);
  detailsContent.html(aa[0].data);
  detailsShare.find('span').eq(0).addClass('returnlist').html(article.tag);

  switch (article.tag) {
    case '仿真规则':
      detailsBar.html("<a href='/'>首页</a><span>&gt;</span><a >仿真规则</a>");
      break;
    case '仿真交易流程':
      detailsBar.html("<a href='/'>首页</a><span>&gt;</span><a >仿真交易流程</a>");
      break;
    case '新手入门':
      detailsBar.html(xsBarhtml);
      break;
    case '进阶知识':
      detailsBar.html(jjBarhtml);
      break;
    case '国家法律':
      zzBarhtml += "<a class='returnlist'>国家法律</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '整非活动':
      detailsBar.html(zfBarhtml);
      break;
    case '投教活动':
      detailsBar.html(tjspBarhtml);
      break;
    case '投教读报':
      detailsBar.html(tjdbBarhtml);
      break;
    case '反洗钱专栏':
      detailsBar.html(fxqBarhtml);
      break;
    case '行政法规':
      zzBarhtml += "<a class='returnlist'>行政法规</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '部门规章':
      zzBarhtml += "<a class='returnlist'>部门规章</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '交易所规则':
      zzBarhtml += "<a class='returnlist'>交易所规则</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '自律规则':
      zzBarhtml += "<a class='returnlist'>自律规则</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '反洗钱':
      zzBarhtml += "<a class='returnlist'>反洗钱</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '普法规则':
      zzBarhtml += "<a class='returnlist'>普法规则</a>";
      detailsBar.html(zzBarhtml);
      break;
    case '公平在身边':
      detailsBar.html(tzzBarhtml);
      break;
    case '诚信建设宣传活动':
      detailsBar.html(tzzhdBarhtml);
      break;
    }
  $('.returnlist').click(function(event) {
    switch (article.tag) {
      case '仿真规则':
        window.location.href = 'details.html#' + 'gjfl';
        break;
      case '仿真规则':
        window.location.href = 'center3.html#' + 'xzfg';
        getlist(GET_ALOW);
        $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
        break;
      case '国家法律':
        window.location.href = 'center3.html#' + 'gjfl';
        getlist(GET_STATUTES);
        $('.mune-bottom--list').eq(0).addClass('active').siblings().removeClass('active');
        break;
      case '行政法规':
        window.location.href = 'center3.html#' + 'xzfg';
        getlist(GET_ALOW);
        $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
        break;
      case '部门规章':
        window.location.href = 'center3.html#' + 'bmgz';
        getlist(GET_DLOW);
        $('.mune-bottom--list').eq(2).addClass('active').siblings().removeClass('active');
        break;
      case '交易所规则':
        window.location.href = 'center3.html#' + 'jysgz';
        getlist(GET_ELOW);
        $('.mune-bottom--list').eq(3).addClass('active').siblings().removeClass('active');
        break;
      case '自律规则':
        window.location.href = 'center3.html#' + 'zlgz';
        getlist(GET_SRULE);
        $('.mune-bottom--list').eq(4).addClass('active').siblings().removeClass('active');
        break;
      case '反洗钱':
        window.location.href = 'center3.html#' + 'fxq';
        getlist(GET_MRULE);
        $('.mune-bottom--list').eq(5).addClass('active').siblings().removeClass('active');
        break;
      case '普法规则':
        window.location.href = 'center3.html#' + 'pfgz';
        getlist(GET_LRULE);
        $('.mune-bottom--list').eq(6).addClass('active').siblings().removeClass('active');
        break;
      case '公平在身边':
        window.location.href = 'investor.html';
        break;
      case '诚信建设宣传活动':
        window.location.href = 'investor2.html';
        break;

    }
  });

})
