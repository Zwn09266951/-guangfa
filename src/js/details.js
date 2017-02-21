//文章详情页
//
var windowhref = window.location.href;
var selectbyuserid = windowhref.indexOf('#');
var url = windowhref.substring(selectbyuserid+1);
_get(url)
.then(function (res) {
  console.log(res);
  var detailsTitle = $('#detailsTitle');
  var detailsShare = $('#detailsShare');
  var detailsInfo = $('#detailsInfo');
  var detailsContent = $('#detailsContent');
  var article = res.d.article;
  var aa = $.parseHTML(article.content);
  detailsTitle.html(article.title);
  detailsShare.find('p').html(article.data);
  detailsShare.find('span').eq(0).html(article.tag);
  detailsInfo.find('b').html(article.excerpt);
  detailsContent.html(aa[0].data);
})
