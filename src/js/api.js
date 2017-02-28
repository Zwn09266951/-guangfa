
var API = 'http://edu.gfqh.cn/index.php/';
//知识中心
var GET_ARTICLE = API + 'alist/advance/';
var GET_GUIDE = API + 'alist/new/';
var GET_STATUTES = API + 'alist/clow/';
var GET_ALOW = API + 'alist/alow/';
var GET_DLOW = API + 'alist/dlow/';
var GET_ELOW = API + 'alist/elow/';
var GET_SRULE = API + 'alist/srule/';
var GET_MRULE = API + 'alist/mrule/';
var GET_LRULE = API + 'alist/lrule/';
//专项活动
var GET_IACTIVE = API + 'alist/iactive/';
var GET_EACTIVE = API + 'alist/eactive/';
var GET_PAPER = API + 'alist/paper/';
var GET_MACTIVE = API + 'alist/mactive/';
//投资者保护
var GET_FAIR = API + 'alist/fair/';
var GET_FAITH = API + 'alist/faith/';
//首页
var HOME_PAGE = API + 'homepage';
//视频
var POST_HITS = API + 'hits';
var GET_VIDEOLIST = API + 'video/';
var GET_VIDEOALL = API + 'allvideo/';
//搜索
var GET_SEARCHALL = API + 'searchall/';
var GET_SEARCHARTICLE = API + 'searcharticle/'
var GET_SEARCHVIDEO = API + 'searchvideo/'
var _get = function (url, query) {
  return $.ajax({
    url: url,
    method: 'get',
    data: query,
    dataType: 'json'
  })
}
var _post = function (url, query) {
  return $.ajax({
    url: url,
    method: 'POST',
    data: query,
    dataType: 'json'
  })
}
//封装获取文章列表
function getlist(api) {
  _get(api)
  .then(function(res) {
    console.log(res);
    var listbox = $('.main-list');
    var listTitle = $('.main-box');
    var html = '';
    var list = res.d.list;
    var page = res.d.count;
    $.each(list,function(i,d) {
      html += '<li data-id=' + d.id + '><i class="iconra"></i><span class="main-list--title">' + d.title + '</span><span class="main-list--time r">' + d.data  + '</span></li>'
    });
    listTitle.find('p').html(res.d.tag)
    listbox.html(html)
    var listmore = $('.main-list li');
    listmore.each(function() {
      $(this).click(function(event) {
        var url = $(this).attr('data-id');
        var windowurl = 'details.html#' + url;
        window.location.href = windowurl;
      });
    });
    $('.M-box').pagination({
        pageCount:page,
        coping:true,
        prevContent:'上页',
        nextContent:'下页',
        callback: function (n) {
          var numb = n.getCurrent();
          _get(api + numb)
          .then(function (res){
            var listbox = $('.main-list');
            var html = '';
            var list = res.d.list;
            var page = res.d.count;
            $.each(list,function(i,d) {
              html += '<li data-src=' + d.id + '><i></i><span class="main-list--title">' + d.title + '</span><span class="main-list--time r">' + d.data  + '</span></li>'
            });
            listbox.html(html)
            var listmore = $('.main-list li');
            listmore.each(function() {
              $(this).click(function(event) {
                var url = $(this).attr('data-id');
                var windowurl = 'details.html#' + url;
                window.location.href = windowurl;
              });
            });
          })
          this.current = numb;
        }
    });

  })

}
//获取播放列表
function vdlist(id) {
  _get(GET_VIDEOLIST + id)
  .then(function(res){
    console.log(res);
    console.log($("body").scrollTop());
    if ($("body").scrollTop() > 100) {
      $("body").animate({scrollTop:100}, 500);
    }

    var indexlist = res.d.indexlist
    var ranking = res.d.ranking
    var url = res.d.indexlist[0].link
    var title = res.d.indexlist[0].title
    var videorankingbox =$('#videorankingbox');
    var videolist = $('#videolist')
    var videotitle = $('.videomain-box--show h3')
    var html3 = '';
    var html2 = '';
    $.each(indexlist,function(i, e) {
      html3 += '<li data-id=' + e.id +' data-src=' + e.link + '>' + e.title + '</li>'
    });
    videolist.html(html3);
    videotitle.html(title);
    videolist.find('li').each(function(index, el) {
       $(this).click(function(event) {
         var url = $(this).attr('data-src');
         var id = $(this).attr('data-id');
         var myPlayer = cyberplayer("playercontainer").setup({
             width: 880,
             height: 500,
             stretching: "uniform",
             file: url,
             autostart: true,
             repeat: false,
             volume: 100,
             controls: true,
             barLogo:false,
             ak: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 公有云平台注册即可获得accessKey
         });
         myPlayer.seek(0);
         vdlist(id);
         $("html,body").animate({scrollTop:0}, 500);
         console.log('aa');
       });
    });
  })
}
