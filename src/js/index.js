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
listbtn.each(function() {
  $(this).click(function(event) {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parent().next().children().toggle();
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
    var imgsrc = $('#imggroup img');
    var imghref = $('#imggroup a');
    var zf = $('#zf');
    var hd = $('#hd');
    var tj = $('#tj');
    var zl = $('#zl');
    var activity = $('.activity-box');
    var foot = $('.footer-box--infl');
    imghref.eq(1).attr('href', banner[0].link);
    imghref.eq(2).attr('href', banner[1].link);
    imghref.eq(3).attr('href', banner[2].link);
    imgsrc.eq(1).attr('src', banner[0].pic);
    imgsrc.eq(2).attr('src', banner[1].pic);
    imgsrc.eq(3).attr('src', banner[2].pic);
    zf.find('h3').html(actice.zhengfei.title);
    zf.find('span').html(actice.zhengfei.data);
    zf.find('i').html(actice.zhengfei.excerpt);
    zf.attr('data-src', actice.zhengfei.url);

    hd.find('h3').html(actice.toujiao.title);
    hd.find('span').html(actice.toujiao.data);
    hd.find('i').html(actice.toujiao.excerpt);
    hd.attr('data-src', actice.toujiao.url);

    tj.find('h3').html(actice.toujiaodubao.title);
    tj.find('span').html(actice.toujiaodubao.data);
    tj.find('i').html(actice.toujiaodubao.excerpt);
    tj.attr('data-src', actice.toujiaodubao.url);

    zl.find('h3').html(actice.fanxiqian.title);
    zl.find('span').html(actice.fanxiqian.data);
    zl.find('i').html(actice.fanxiqian.excerpt);
    zl.attr('data-src', actice.fanxiqian.url);

    activity.each(function(index, el) {
      $(this).click(function(event) {
        window.location.href = 'details.html#' + 'http://' + $(this).attr('data-src');
      });
    });
    foot.find('span').eq(0).html(footer.visit_count)
    foot.find('span').eq(1).html(footer.icp)
    foot.find('span').eq(2).html(footer.copyright)
  })

var aa = $('.button');
aa.eq(0).click(function(event) {
  window.location.href = 'center.html';
});
aa.eq(1).click(function(event) {
  window.location.href = 'video.html';
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















})
