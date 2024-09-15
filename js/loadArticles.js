async function loadArticles() {
    // 读取articleList.json
    const response = await fetch('http://blog.blackcyan07.top/articles/articleList.json');
    const articleFiles = await response.json();

    // 读取每个文章文件
    const articles = await Promise.all(articleFiles.map(async (file) => {
        const res = await fetch(file);
        return await res.json();
    }));

    // 根据日期排序
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 展示文章
    const container = document.getElementById('articles-container');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <section class="announcement">
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                <p class="date">发布日期: ${new Date(article.date).toLocaleDateString()}</p>
            </section>
        `;
        container.appendChild(articleElement);
    });
}

window.onload = loadArticles;
