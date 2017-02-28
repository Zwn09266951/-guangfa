$(function () {

  //导航菜单
  var mune = $('#mune li');
  var munelist2 = $('#munelist2 span');
  mune.hover(function() {
    $(this).children('div').stop(true,true).slideDown();
  }, function() {
    $(this).children('div').stop(true,true).slideUp();
  });

  munelist2.hover(function() {
    $(this).children('div').stop(true,true).slideDown();
  }, function() {
    $(this).children('div').stop(true,true).slideUp();
  });

  //搜索
  var searchShow = $('.searchShow');
  var searchClose = $('.searchClose');
  var searchBar = $('.searchBar');
  var searchBtn = $('.searchBtn');
  searchShow.click(function(event) {
    searchBar.fadeIn(500);
    searchShow.hide();
    searchClose.show();
    searchBtn.addClass('bg');
  });
  searchClose.click(function(event) {
    searchBar.fadeOut(500);
    searchShow.show();
    searchClose.hide();
    searchBtn.removeClass('bg');

  });

  //轮播
  var carousel = $('#carousel');
  var prev = $('#prev');
  var next = $('#next');
  var imggroup = $('#imggroup');
  var button = $('#focus li');
  var index = 1;
  var time;

  function showButton(){
    button.each(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
      }
      button.eq(index - 1).addClass('active');
    });
  }
  function away(val){
    var nextLeve  = parseInt(imggroup.css('left')) + val;
    imggroup.animate({left: "" + nextLeve + "px" + ""}, 500, function () {
      if (nextLeve < -9600) {
        imggroup.css('left', '-1920px');
      }
      if (nextLeve > -1920) {
        imggroup.css('left', '-9600px');
      }
    });
  }
  next.click(function(event) {
    if (imggroup.is(':animated')) {
      return;
    }
    if (index == 5) {
      index = 1;
    } else {
      index += 1;
    }
    showButton();
    away(-1920);
  });
  prev.click(function(event) {
    if (imggroup.is(':animated')) {
      return;
    }
    if (index == 1) {
      index = 5;
    } else {
      index -= 1;
    }
    showButton();
    away(1920);
  });
  button.each(function() {
    $(this).click(function(event) {
      var myIndex = parseInt($(this).attr('index'));
      var offset = -1920 * (myIndex - index);
      away(offset);
      index = myIndex;
      showButton();
    });
  });
  function play() {
    time = setTimeout(function () {
      next.click();
      play();
    }, 3000)
  }
  function stop() {
    clearTimeout(time);
  }
  $('#imggroup').hover(function() {
    stop()
  }, function() {
    play()
  });
  play();

//视频
var listbtn = $('.playlistBtn li');
var recommendbtn = $('.recommend li');
var hotbtn = $('.hot li');
listbtn.each(function(index,el) {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
    $('.playlistOption1').eq(index).show();
    $('.playlistOption1').eq(index-1).hide();
  });
});

recommendbtn.each(function() {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
hotbtn.each(function() {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

//首页
//
_get(HOME_PAGE)
  .then(function(res){
    console.log(res);
    var actice = res.d.actice;
    var banner = res.d.banner;
    var footer = res.d.footer;
    var video = res.d.video;
    var trade = res.d.trade;
    var recommend = video.recommend;
    var ranking = video.ranking;
    var rankingurl = $('#ranking');
    var recommendbox = $('#recommend');
    var rankingbox = $('.videoname');
    var imgsrc = $('#imggroup img');
    var imghref = $('#imggroup a');
    var zf = $('#zf');
    var hd = $('#hd');
    var tj = $('#tj');
    var zl = $('#zl');
    var activity = $('.activity-box');
    var foot = $('.footer-box--infl');
    var cfzjylc = $('.cfzjylc');
    var cfzgz = $('.cfzgz');
    cfzjylc.click(function(event) {
      var url = trade.liucheng.url.substring(30);
      window.location.href = 'details.html#' + url;
      _get('http://edu.gfqh.cn/index.php/detail/'+ url)
      .then(function(res){
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

      })
    });
    cfzgz.click(function(event) {
      var url = trade.guizhe.url.substring(30);
      window.location.href = 'details.html#' + url;
      _get('http://edu.gfqh.cn/index.php/detail/'+ url)
      .then(function(res){
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

      })

    });
    imghref.eq(0).attr('data-id', banner[4].link.substring(29));
    imghref.eq(1).attr('data-id', banner[0].link.substring(29));
    imghref.eq(2).attr('data-id', banner[1].link.substring(29));
    imghref.eq(3).attr('data-id', banner[2].link.substring(29));
    imghref.eq(4).attr('data-id', banner[3].link.substring(29));
    imghref.eq(5).attr('data-id', banner[4].link.substring(29));
    imghref.eq(5).attr('data-id', banner[0].link.substring(29));
    imgsrc.eq(0).attr('src', banner[4].pic);
    imgsrc.eq(1).attr('src', banner[0].pic);
    imgsrc.eq(2).attr('src', banner[1].pic);
    imgsrc.eq(3).attr('src', banner[2].pic);
    imgsrc.eq(4).attr('src', banner[3].pic);
    imgsrc.eq(5).attr('src', banner[4].pic);
    imgsrc.eq(6).attr('src', banner[0].pic);
    imghref.each(function(index, el) {
      $(this).click(function(event) {
        window.location.href = 'details.html#' + $(this).attr('data-id');
      });
    });
    zf.find('h3').html(actice.zhengfei.title);
    zf.find('span').html(actice.zhengfei.data);
    zf.find('i').html(actice.zhengfei.excerpt);
    zf.attr('data-id', actice.zhengfei.url.substring(29));

    hd.find('h3').html(actice.toujiao.title);
    hd.find('span').html(actice.toujiao.data);
    hd.find('i').html(actice.toujiao.excerpt);
    hd.attr('data-id', actice.toujiao.url.substring(29));

    tj.find('h3').html(actice.toujiaodubao.title);
    tj.find('span').html(actice.toujiaodubao.data);
    tj.find('i').html(actice.toujiaodubao.excerpt);
    tj.attr('data-id', actice.toujiaodubao.url.substring(29));

    zl.find('h3').html(actice.fanxiqian.title);
    zl.find('span').html(actice.fanxiqian.data);
    zl.find('i').html(actice.fanxiqian.excerpt);
    zl.attr('data-id', actice.fanxiqian.url.substring(29));


    activity.each(function(index, el) {
      $(this).click(function(event) {
        window.location.href = 'details.html#'+ $(this).attr('data-id');
      });
    });
    foot.find('span').eq(0).html(footer.visit_count)
    foot.find('span').eq(1).html(footer.icp)
    foot.find('span').eq(2).html(footer.copyright)
    var recommendhtml = '';
    var rankinghtml = '';
    $.each(recommend,function(i, d) {
      recommendhtml += '<li data-id=' + d.id + ' data-src=' + d.link + '>' + d.title + '</li>'
    });
    recommendbox.html(recommendhtml);
    recommendbox.find('li').each(function(index, el) {
      $(this).click(function(event) {

        var url = $(this).attr('data-src');

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

    rankingurl.find('li').each(function(index, el) {
      console.log();
    // $(this).attr('data-src', ranking[index].link);
    // $(this).attr('data-id', ranking[index].id);
    });

    for(var i=0;i<rankingbox.length;i++){
      // rankingbox[i].innerHTML = '<p>' + ranking[i].title + '</p><p><i></i><span>' + ranking[i].hits + '</span></p>';
    }
    var html4 = '';
    $.each(ranking,function(index, el) {

      html4 += "<li data-id="+ el.id +" data-src="+ el.link +" ><div><p> " + el.title + "</p><p><i></i><span>" + el.hits + "</span></p></div></li>"
    });
    $('#ranking').html(html4);

    rankingurl.find('li').each(function(index, el) {
      $(this).click(function(event) {
        var url = $(this).attr('data-src');
        var canshu = [];
        var id = 'id=' + $(this).attr('data-id');
        _post(POST_HITS,id)
        .then(function (res) {

        })
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
  })

var aa = $('.button');
aa.eq(0).click(function(event) {
  window.location.href = 'center.html';
});
aa.eq(1).click(function(event) {
  window.location.href = 'videos.html';
});
aa.eq(2).click(function(event) {
  window.location.href = 'activity.html';
});
aa.eq(3).click(function(event) {
  window.location.href = 'investor.html';
});

//专项活动
$('.activity-box').each(function(index, el) {

});

$('.m1').click(function(event) {
  window.location.href = 'center3.html#' + 'gjfl';
  getlist(GET_STATUTES);
  $('.mune-bottom--list').eq(0).addClass('active').siblings().removeClass('active');
});
$('.m2').click(function(event) {
  window.location.href = 'center3.html#' + 'xzfg';
  getlist(GET_ALOW);
  $('.mune-bottom--list').eq(1).addClass('active').siblings().removeClass('active');
});
$('.m3').click(function(event) {
  window.location.href = 'center3.html#' + 'bmgz';
  getlist(GET_DLOW);
  $('.mune-bottom--list').eq(2).addClass('active').siblings().removeClass('active');
});
$('.m4').click(function(event) {
  window.location.href = 'center3.html#' + 'jysgz';
  getlist(GET_ELOW);
  $('.mune-bottom--list').eq(3).addClass('active').siblings().removeClass('active');
});
$('.m5').click(function(event) {
  window.location.href = 'center3.html#' + 'zlgz';
  getlist(GET_SRULE);
  $('.mune-bottom--list').eq(4).addClass('active').siblings().removeClass('active');
});
$('.m6').click(function(event) {
  window.location.href = 'center3.html#' + 'fxq';
  getlist(GET_MRULE);
  $('.mune-bottom--list').eq(5).addClass('active').siblings().removeClass('active');
});
$('.m7').click(function(event) {
  window.location.href = 'center3.html#' + 'pfgz';
  getlist(GET_LRULE);
  $('.mune-bottom--list').eq(6).addClass('active').siblings().removeClass('active');
});



var search = $('#searchNow');
search.click(function(event) {
  var searchinf = $('.searchBar input').val()
  window.location.href = 'searchs.html#' + searchinf;
});












})
