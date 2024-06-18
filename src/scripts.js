// 当页面加载完成时，默认加载首页内容
document.addEventListener('DOMContentLoaded', function() {
    loadPage('home.html');
});

// 加载指定页面内容到中间内容区域
function loadPage(pageUrl) {
    fetch(pageUrl) // 使用fetch API请求页面内容
        .then(response => response.text()) // 将响应转为文本
        .then(data => {
            document.getElementById('blog-posts').innerHTML = data; // 将内容插入到指定区域
        });
}

// 切换移动端菜单显示
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.mobile-overlay');
    sidebar.classList.toggle('mobile-active');
    overlay.classList.toggle('active');
}
