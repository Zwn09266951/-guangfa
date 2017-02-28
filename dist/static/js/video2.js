$(function () {
  var windowhref = window.location.href;
  var selectbyuserid = windowhref.indexOf('#');
  var searchurl = windowhref.substring(selectbyuserid+1);
  if(selectbyuserid !== -1){
    _get(GET_VIDEOLIST + searchurl)
      .then(function(res){
        var indexlist = res.d.indexlist
        var ranking = res.d.ranking
        var url = res.d.indexlist[0].link
        var title = res.d.indexlist[0].title
        var videorankingbox =$('#videorankingbox');
        var videolist = $('#videolist')
        var videotitle = $('.videomain-box--show h3')
        var html = '';
        var html2 = '';
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
        $.each(ranking,function(index, el) {
          index = index + 1;
          html2 += "<li class='clearfix' data-src="+ el.link +" data-id=" + el.id +"><p>" + el.title + "</p><p><i></i>" + el.hits + "</p></li>"
        });
        videorankingbox.html(html2);
        videorankingbox.find('li').each(function(index, el) {
          $(this).click(function(event) {
            var url = $(this).attr('data-src');
            var canshu = [];
            var id = 'id=' + $(this).attr('data-id');
            _post(POST_HITS,id)
            var myPlayer = cyberplayer("playercontainer").setup({
                width: 600,
                height: 450,
                stretching: "uniform",
                file: url,
                autostart: true,
                repeat: false,
                volume: 100,
                controls: true,
                barLogo:false
            });
            myPlayer.seek(0);
          });
        });
        $.each(indexlist,function(i, e) {
          html += '<li data-src=' + e.link + '>' + e.title + '</li>'
        });
        videolist.html(html);
        videotitle.html(title);
        videolist.find('li').each(function(index, el) {
          $(this).click(function(event) {
            var url = $(this).attr('data-src');
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
          });
        });
      })
  } else {
    _get(GET_VIDEOLIST)
    .then(function(res){

      var indexlist = res.d.indexlist
      var ranking = res.d.ranking
      var url = res.d.indexlist[0].link
      var title = res.d.indexlist[0].title
      var videorankingbox =$('#videorankingbox');
      var videolist = $('#videolist')
      var videotitle = $('.videomain-box--show h3')
      var html = '';
      var html2 = '';
      var myPlayer = cyberplayer("playercontainer").setup({
          width: 880,
          height: 500,
          stretching: "uniform",
          file: url,
          autostart: false,
          repeat: false,
          volume: 100,
          controls: true,
          barLogo:false,
          ak: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 公有云平台注册即可获得accessKey
      });
      $.each(ranking,function(index, el) {
        index = index + 1;
        html2 += "<li class='clearfix' data-src="+ el.link +" data-id=" + el.id +"><p>" + el.title + "</p><p><i></i>" + el.hits + "</p></li>"
      });
      videorankingbox.html(html2);
      videorankingbox.find('li').each(function(index, el) {
        $(this).click(function(event) {
          var url = $(this).attr('data-src');
          var canshu = [];
          var vid = $(this).attr('data-id');
          var id = 'id=' + $(this).attr('data-id');
          _post(POST_HITS,id)
          var myPlayer = cyberplayer("playercontainer").setup({
              width: 880,
              height: 500,
              stretching: "uniform",
              file: url,
              autostart: true,
              repeat: false,
              volume: 100,
              controls: true,
              barLogo:false
          });
          myPlayer.seek(0);
          vdlist(vid);
        });
      });
      $.each(indexlist,function(i, e) {
        html += '<li data-id=' + e.id + ' data-src=' + e.link + '>' + e.title + '</li>'
      });
      videolist.html(html);
      videotitle.html(title);
      videolist.find('li').each(function(index, el) {
        $(this).click(function(event) {
          var url = $(this).attr('data-src');
          var vid = $(this).attr('data-id');

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
          vdlist(vid);

        });
      });

    })

  }
    _get(GET_VIDEOALL)
  .then(function(res){
    var defaultlist = $('.defaultlist');
    var defaultlistbox = $('#defaultlistbox');
    var allvideo = res.d.alllist.list;
    var page = res.d.alllist.count;
    var html = '';
    $('.M-box').pagination({
        pageCount:page,
        coping:true,
        prevContent:'上页',
        nextContent:'下页',
        callback:function(n){
          var numb = n.getCurrent();
          _get(GET_VIDEOALL + numb)
          .then(function(res){
            var defaultlist = $('.defaultlist');
            var defaultlistbox = $('#defaultlistbox');
            var allvideo = res.d.alllist.list;
            var page = res.d.alllist.count;
            var html2 = '';
            $.each(allvideo,function(index, el) {
              html2 += '<li><span data-id=' + el.id + ' data-src=' + el.link + '><i class="iconra"></i>' + el.title + '</span></li>'
            });
            defaultlistbox.html(html2);
            defaultlistbox.find('span').each(function(index, el) {
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
              });
            });
          })
        }
    })

    $.each(allvideo,function(index, el) {
      html += '<li><span data-id=' + el.id + ' data-src=' + el.link + '><i class="iconra"></i>' + el.title + '</span></li>'
    });
    defaultlistbox.html(html);
    defaultlistbox.find('span').each(function(index, el) {
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
      });
    });

  })

})
