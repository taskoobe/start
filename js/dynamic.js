$(document).ready(function () {
    // 页面加载时初始化主页链接的滑块样式
    const homeLink = $(".header-nav a[href='dynamic.html']"); // 获取主页链接
    const position = homeLink.parent().position(); // 获取主页链接的位置
    const width = homeLink.parent().width(); // 获取主页链接的宽度

    // 初始化主页链接的滑块样式
    $(".header-nav .slide1").css({ opacity: 1, left: position.left, width: width });

});
const shell = document.querySelector('.boxs');
const cells = shell.querySelectorAll('.box');
const cellWidth = shell.offsetWidth;
const cellHeight = shell.offsetHeight;
const cellSize = cellHeight;

// 设置数量
const cellCount = 5; // 改为动态获取数量
const radius = Math.round((cellSize / 1.8) / Math.tan(Math.PI / cellCount));
const theta = 360 / cellCount;
//当前索引
let selectedIndex = 0;

function rotateshell() {
	const angle = theta * selectedIndex * -1;
	shell.style.transform = 'translateZ(' + -radius + 'px) rotateX(' + -angle + 'deg)';
	const cellIndex = selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) : (selectedIndex % cellCount);

	cells.forEach((cell, index) => {
		if (cellIndex === index) {
			cell.classList.add('selected');
		} else {
			cell.classList.remove('selected');
		}
	});
}

function selectPrev() {
	selectedIndex--;
	rotateshell();
}

function selectNext() {
	selectedIndex++;
	rotateshell();
}

const prevButton = document.querySelector('.up');
prevButton.addEventListener('click', selectPrev);

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', selectNext);

function Initshell() {
	cells.forEach((cell, i) => {
		const cellAngle = theta * i;
		cell.style.transform = 'rotateX(' + -cellAngle + 'deg) translateZ(' + radius + 'px)';
	});
	rotateshell();
}


Initshell();


// 获取用户名输入框元素
var usernameInput = document.getElementById('username');

// 实时监听输入事件
usernameInput.addEventListener('input', function() {
    // 获取输入的用户名
    var username = usernameInput.value;

    // 检查用户名长度是否超过 7 个字符
    if (username.length > 7) {
        alert('用户名不能超过7个字');
        // 还可以进一步截断输入，让用户无法输入超过 7 个字符
        usernameInput.value = username.slice(0, 7);
    }
});
// 给提交按钮添加点击事件监听器
document.getElementById('submitBtn').addEventListener('click', function () {
	//获取用户名和留言内容
	var username = document.getElementById('username').value;
	var message = document.getElementById('message').value;
	//如果留言为空，弹出提示并返回
	if (message === '') {
		alert('请输入内容');
		return;
	}
	
	//如果用户名为空，将用户名设置为匿名
	if (username === '') {
		username = '匿名'
	}
	//获取留言板元素和当前时间
	var messageBoard = document.getElementById('messageBoard');
	var newMessage = document.createElement('div');
	newMessage.classList.add('message');
	//设置留言元素的innerHTML，包含用户名、时间和留言内容
	newMessage.innerHTML = '<div class="message-info"><div class="info"><img src ="./image/customer.jpg"><strong>'
		+ username + '</strong></div><span>发布于：' + getCurrentTime() +
		'</span></div><div class="language">' + message + '</div>';
	//在留言板的第一个子元素之前插入新的留言
	messageBoard.insertBefore(newMessage, messageBoard.firstChild);
	//清空用户名和留言内容输入框
	document.getElementById('username').value = '';
	document.getElementById('message').value = '';
})
//获取当前时间函数
function getCurrentTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = ('0' + (now.getMonth() + 1)).slice(-2);
	var day = ('0' + now.getDate()).slice(-2);
	var hours = ('0' + now.getHours()).slice(-2);
	var minutes = ('0' + now.getMinutes()).slice(-2);
	var seconds = ('0' + now.getSeconds()).slice(-2);
	return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

