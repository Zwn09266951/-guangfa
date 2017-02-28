$(function () {
  //搜索
  var searchbtn = $('.searchbox li')
  var title = $('.searchList-box--title')
  var inf = $('.searchList-box--inf')
  var time = $('.searchList-box--time')
  var search = $('#searchNow');
  var searchListbox = $('.searchList');



  var searchAll = $('#searchAll')
  var searchList = $('#searchList')
  var searchVideo = $('#searchVideo')
  searchbtn.each(function(index, el) {
    $(this).click(function(event) {
      $(this).addClass('active').siblings().removeClass('active')
    });
  });
  //全部
  var windowhref = window.location.href;
  var selectbyuserid = windowhref.indexOf('#');
  var url = windowhref.substring(selectbyuserid+1);


  function selectAll(query){
    _get(GET_SEARCHALL + query)
    .then(function(res){

      var searchbox = $('.searchbox');
      var searchhtml = '';
      var list = res.d.list;
      var page = res.d.countpage;
      var inf = query;
      var Numb = res.d.countnum;
      var searinf = $('.searchjieg i');
      var searNumb = $('.searchjieg span');
      searchbox.find('li').eq(0).addClass('active').siblings().removeClass('active');
      searinf.html(inf);
      searNumb.html(Numb);

      $.each(list,function(index, el) {

        searchhtml += "<div class='searchList-box'><div class='searchList-box--title' data-type="+ el.type + " data-src="+ el.url +">"+ el.title+"</div><div class='searchList-box--inf'>"+ ''+"</div><div class='searchList-box--time'>"+ el.date +"</div></div>"
      });
      searchListbox.html(searchhtml)
      var titlea = $('.searchList-box--title');
      titlea.each(function(index, el) {
        $(this).click(function(event) {
          var type = $(this).attr('data-type');
          var src = $(this).attr('data-src').substring(29);
          switch (type) {
            case 'article':
              window.location.href = 'details.html#' + src;
              break;
            case 'video':
            window.location.href = 'videos.html#' + src;
            break;
          }
        });
      });

      $('.M-box').pagination({
          pageCount:page,
          coping:true,
          prevContent:'上页',
          nextContent:'下页'
      })
    })
  }

  function selectList(query){
    _get(GET_SEARCHARTICLE + query)
    .then(function(res){
      var list = res.d.list;
      var page = res.d.countpage;
      var searchhtml1 = '';
      var inf = query;
      var Numb = res.d.countnum;
      var searinf = $('.searchjieg i');
      var searNumb = $('.searchjieg span');
      searinf.html(inf);
      searNumb.html(Numb);
      $.each(list,function(index, el) {
        searchhtml1 += "<div class='searchList-box'><div class='searchList-box--title' data-type="+ el.type + " data-src="+ el.url +">"+ el.title +"</div><div class='searchList-box--inf'>"+ '' +"</div><div class='searchList-box--time'>"+ el.date +"</div></div>"
      });
      searchListbox.html(searchhtml1)
      $('.M-box').pagination({
          pageCount:page,
          coping:true,
          prevContent:'上页',
          nextContent:'下页'
      })
    })
  }

  function selectVideo(query){
    _get(GET_SEARCHVIDEO + query)
    .then(function(res){
      console.log(res);
      var list = res.d.list;
      var page = res.d.countpage;
      var searchhtml2 = '';
      var inf = query;
      var Numb = res.d.countnum;
      var searinf = $('.searchjieg i');
      var searNumb = $('.searchjieg span');
      searinf.html(inf);
      searNumb.html(Numb);
      $.each(list,function(index, el) {
        searchhtml2 += "<div class='searchList-box'><div class='searchList-box--title' data-type="+ el.type + " data-src="+ el.url +">"+ el.title +"</div><div class='searchList-box--inf'>"+ '' +"</div><div class='searchList-box--time'>"+ el.date +"</div></div>"
      });
      searchListbox.html(searchhtml2)
      $('.M-box').pagination({
          pageCount:page,
          coping:true,
          prevContent:'上页',
          nextContent:'下页'
      })
    })
  }

  selectAll(url);

  search.click(function(event) {
    var searchinf = $('.searchBar input').val()
    window.location.href = 'searchs.html#' + searchinf;
    selectAll(searchinf)
  });

  searchAll.click(function(event) {
    var windowhref = window.location.href;
    var selectbyuserid = windowhref.indexOf('#');
    var url = windowhref.substring(selectbyuserid+1);

    window.location.href = 'searchs.html#' + url;
    selectAll(url)
  });

  searchList.click(function(event) {
    var windowhref = window.location.href;
    var selectbyuserid = windowhref.indexOf('#');
    var url = windowhref.substring(selectbyuserid+1);

    window.location.href = 'searchs.html#' + url;
    selectList(url)
  });

  searchVideo.click(function(event) {
    var windowhref = window.location.href;
    var selectbyuserid = windowhref.indexOf('#');
    var url = windowhref.substring(selectbyuserid+1);
    window.location.href = 'searchs.html#' + url;
    selectVideo(url)
  });
  var aa = "http://gf.echebay.com/index.php/video/oX5DQd3VlE"
  _get(aa)
  .then(function(res){

  })
})
