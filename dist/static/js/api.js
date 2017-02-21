
var API = 'http://gf.echebay.com/';
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



var _get = function (url, query) {
  return $.ajax({
    url: url,
    method: 'get',
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
      html += '<li data-src=' + 'http://' + d.url + '><i></i><span class="main-list--title">' + d.title + '</span><span class="main-list--time r">' + d.data  + '</span></li>'
    });
    listTitle.find('p').html(res.d.tag)
    listbox.html(html)
    var listmore = $('.main-list li');
    listmore.each(function() {
      $(this).click(function(event) {
        var url = $(this).attr('data-src');
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
              html += '<li data-src=' + d.url + '><i></i><span class="main-list--title">' + d.title + '</span><span class="main-list--time r">' + d.data  + '</span></li>'
            });
            listbox.html(html)
            var listmore = $('.main-list li');
            listmore.each(function() {
              $(this).click(function(event) {
                var url = $(this).attr('data-src');
                alert(url);
              });
            });
          })
          this.current = numb;
        }
    });

  })

}
