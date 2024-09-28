$(document).ready(function () {
    // 页面加载时初始化主页链接的滑块样式
    const homeLink = $(".header-nav a[href='index.html']"); // 获取主页链接
    const position = homeLink.parent().position(); // 获取主页链接的位置
    const width = homeLink.parent().width(); // 获取主页链接的宽度

    // 初始化主页链接的滑块样式
    $(".header-nav .slide1").css({ opacity: 1, left: position.left, width: width });

});
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('QQ号已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '1000';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300); // 等待过渡效果完成后再移除
    }, 2000); // 2秒后开始消失
}
