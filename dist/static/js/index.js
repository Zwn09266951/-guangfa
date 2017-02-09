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


})
