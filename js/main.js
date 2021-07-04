$(document).ready(function() {
  $('.check_other a').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
  // 伸縮
  let getWidth = $('.content_info').width();
  $('.content_info').resizable({
    resize: function(event, ui) {
      let resizeWidth = ui.originalSize.width - ui.size.width;
      $('.content_info').height(ui.originalSize.height);
      // 拉大字體加大
      if ($('.cart_list').width() >= 500) {
        $('.cart_list').addClass('cart_list_lg');
        $('.cart_list .list_item .name p').css('display', 'block');
      } else {
        $('.cart_list').removeClass('cart_list_lg');
        $('.cart_list .list_item .name p').css('display', 'none');
      }
      $('.detail_info').width($('.main').width() - $('.content_info').width());
      let storeSetUp = JSON.parse(localStorage.getItem('storeSetUp')) || json_home.storeSetUp;
      storeSetUp.productListWidth = $('.content_info').width();
      localStorage.setItem('storeSetUp', JSON.stringify(storeSetUp));
    }
  });
});
// 取得 localstorege 設定資料
(function() {
  // console.log(JSON.parse(localStorage.getItem('storeSetUp')));
  let storeSetUp = JSON.parse(localStorage.getItem('storeSetUp'));
  if (storeSetUp != null) {
    if (json_home.storeSetUp.cID == storeSetUp.cID) {
      json_home.storeSetUp = storeSetUp;
      $('.content_info').width(storeSetUp.productListWidth);
      $('.detail_info').width($('.main').width() - $('.content_info').width());
    } else {
      storeSetUp = json_home.storeSetUp;
    }
  } else {
    storeSetUp = json_home.storeSetUp;
  }
  // 判斷字體是否加大
  $(document).ready(function() {
    if ($('.cart_box').width() >= 500) {
      $('.cart_list').addClass('cart_list_lg');
      $('.cart_list .list_item .name p').css('display', 'block');
    } else {
      $('.cart_list').removeClass('cart_list_lg');
      $('.cart_list .list_item .name p').css('display', 'none');
    }
  });
})();
//動態取得時間
function getDate() {
  let today = new Date();
  let date = today.getFullYear() + '-' + twoDigits(today.getMonth() + 1) + '-' + twoDigits(today.getDate()) + ' ';
  let week = '日一二三四五六 '.charAt(today.getDay());
  let time = twoDigits(today.getHours()) + ':' + twoDigits(today.getMinutes()) + ':' + twoDigits(today.getSeconds());
  $('.system_time').html(` <span>${date}  ${time}</span>（${week}）`);
}
function twoDigits(val) {
  if (val < 10) return '0' + val;
  return val;
}
$(function() {
  setInterval(getDate, 1000);
});
