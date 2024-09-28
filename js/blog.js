$(document).ready(function () {
    // 页面加载时初始化主页链接的滑块样式
    const homeLink = $(".header-nav a[href='blog.html']"); // 获取主页链接
    const position = homeLink.parent().position(); // 获取主页链接的位置
    const width = homeLink.parent().width(); // 获取主页链接的宽度

    // 初始化主页链接的滑块样式
    $(".header-nav .slide1").css({ opacity: 1, left: position.left, width: width });

});