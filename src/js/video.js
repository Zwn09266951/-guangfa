$(function () {
  _get(HOME_PAGE)
  .then(function(res){
    var url = res.d.video.recommend[0].link;
    var myPlayer = cyberplayer("playercontainer").setup({
        width: 600,
        height: 450,
        stretching: "uniform",
        file: url,
        autostart: false,
        repeat: false,
        volume: 100,
        controls: true,
        barLogo:false,
        ak: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 公有云平台注册即可获得accessKey
    });

  })
})
