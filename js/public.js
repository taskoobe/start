
window.onload = function() {
   

    const mehover = document.getElementsByClassName('me-hover')[0]; // 选择集合中的第一个元素
    const text = mehover.innerText;
    mehover.innerText = ''; // 清空容器中的文字

    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('unvisible'); // 初始状态为不可见
        mehover.appendChild(span);

        setTimeout(() => {
            span.classList.add('visible'); // 逐字添加可见效果
        }, index * 150); // 每个字符延时显示
    });
};


function removeEventHandlers() {
    // 移除 jQuery 事件
    $(".header-nav a").off("click mouseover mouseout");

    // 移除原生事件
    document.querySelector('.header-nav').removeEventListener('click', handleClick);
    document.removeEventListener('DOMContentLoaded', restoreSlidePosition);
}

// 处理点击事件的函数
/*function handleClick(event) {
    if (event.target.tagName === 'A') {
        var currentLi = event.target.parentElement;
        var currentWidth = currentLi.offsetWidth;
        var left = currentLi.offsetLeft;

        sessionStorage.setItem('slide1Width', currentWidth);
        sessionStorage.setItem('slide1Left', left);
    }
}省略*/

// 恢复滑块位置的函数
function restoreSlidePosition() {
    var savedWidth = sessionStorage.getItem('slide1Width');
    var savedLeft = sessionStorage.getItem('slide1Left');

    if (savedWidth !== null && savedLeft !== null) {
        var slide1 = document.querySelector('.header-nav .slide1');
        slide1.style.width = savedWidth + 'px';
        slide1.style.left = savedLeft + 'px';
    }
}



// 添加事件处理函数
function addEventHandlers() {
   
   /* $(".header-nav a").on("click", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $(".header-nav .slide1").css({ opacity: 1, left: position.left, width: width });
    }); 可以不用*/

    $(".header-nav a").on("mouseover", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $(".header-nav .slide2").css({ opacity: 1, left: position.left, width: width }).addClass("squeeze");
    });

    $(".header-nav a").on("mouseout", function () {
        $(".header-nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });

    document.querySelector('.header-nav').addEventListener('click', handleClick);
    document.addEventListener('DOMContentLoaded', restoreSlidePosition);
}

function resetSlidePosition() {
    // 移除样式（用于小屏幕下重置）
    var slide1 = document.querySelector('.header-nav .slide1');
    slide1.style.width = '';
    slide1.style.left = '';
}



function handleScreenSizeChange() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        // 小屏幕时移除事件和 sessionStorage 数据
        removeEventHandlers();
        resetSlidePosition();
    } else {
        // 大屏幕时恢复事件和 sessionStorage 中的状态
        addEventHandlers();
        restoreSlidePosition(); // 恢复滑块状态
    }

}
// 页面加载时检查屏幕尺寸
document.addEventListener('DOMContentLoaded', function () {
    handleScreenSizeChange();
    window.addEventListener('resize', handleScreenSizeChange); // 当屏幕尺寸改变时，动态处理

});

// 初始化状态
let mycard = document.getElementById('mycard');
let initialTop = window.innerHeight * 0.2; // 初始 top 值（20% 的视口高度）
mycard.style.top = initialTop + 'px'; // 设置初始状态
const navbar = document.getElementsByClassName('header-box')[0];
let container = document.getElementById('mycard');

// 获取导航栏的高度
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop);
    // 获取容器相对于视口顶部的距离
    let distanceFromTop = container.getBoundingClientRect().top;
    // 获取计算后的 top 值
    let computedStyle = window.getComputedStyle(mycard);
    let currentTop = parseInt(computedStyle.top);

    // 更新 mycard 的位置
    if (distanceFromTop > navbarHeight) {
        // 计算新的 top 值，确保不小于 0
        let newTop = Math.max(navbarHeight, initialTop - scrollTop);
        mycard.style.top = newTop + 'px';  // 重新设置新的 top 值
    }

    // 平滑恢复状态
    if (scrollTop < initialTop) {
        // 逐步恢复 mycard 的位置
        let recoveryTop = Math.min(initialTop, currentTop + scrollTop);
        mycard.style.top = recoveryTop + 'px'; // 逐步恢复到初始位置
    }
});
document.getElementById('return').addEventListener('click', function(event){
    event.preventDefault();
    history.back();
    
})
