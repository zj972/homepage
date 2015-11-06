//导航栏
$(document).ready(function() {
  //滚动条发生滚动
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    //console.log(top);
    var menu = $("#menu");
    var pages = $("#page_box").find(".page");
    var hoverId = ""; //当前所在的楼层（page） id
    pages.each(function() {
      var m = $(this);
      var pageTop = m.offset().top;
      //console.log(pageTop);
      if (top > pageTop - 300) {
        hoverId = "#" + m.attr("id");
      } else {
        return false;
      }
    });
    //给相应楼层的a设置hover，取消其他链接的hover
    var hoverLink = menu.find(".hover");
    if (hoverId && hoverLink.attr("href") != hoverId) {
      hoverLink.removeClass("hover");
      menu.find("[href=" + hoverId + "]").addClass("hover");
    }
  });
});
//锚点跳转滑动效果
$(function() {
    $('a[href*=#],area[href*=#]').click(function() {
      console.log(this.pathname)
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({
            scrollTop: targetOffset
          }, 400);
          return false;
        }
      }
    });
  })
  //背景窗口自适应
function onResize() {
  var bodyHeight = $(document.body).height();
  $(".page").css('height', bodyHeight + 'px');
}
$(document).ready(onResize());
//图片轮播
var i = 0;
$(document).ready(function viwepager() {
  i++;
  $(".viwepager").delay(3000);
  $(".viwepager").animate({
    left: "-=100%"
  }, 1000, function() {
    console.log(i);
    if (i == 4) {
      $(".viwepager").delay(3000);
      backViwepager();
      viwepager();
    } else {
      viwepager();
    }
  });
});

function backViwepager() {
  i = 0;
  $(".viwepager").animate({
    left: "+=400%"
  }, 1000);
}