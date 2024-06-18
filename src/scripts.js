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
