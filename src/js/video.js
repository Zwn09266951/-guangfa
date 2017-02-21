$(function () {
  var player = cyberplayer("playercontainer").setup({
              width: 600,
              height: 450,
              stretching: "uniform",
              file: "http://multimedia.bj.bcebos.com/media/motorOutput.mp4",
              autostart: false,
              repeat: false,
              volume: 100,
              controls: true,
              barLogo:false,
              ak: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 公有云平台注册即可获得accessKey
          });
})
