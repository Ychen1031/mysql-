async function addProductPage() {
    const page = `
    <!-- 主內容區 -->
    <main class="admin-content">
    <h2>資料庫管理 - Product 資料表</h2>
        <div class="container" id='content'>
            產品ID：<input type="text" id='pId'><br>
            產品名稱：<input type="text" id='pName'><br>
            種類：<input type="text" id='category'><br>
            價格：<input type="text" id='price'><br>
            尺寸：<select id='size'>
                    <option value="小">小</option>
                    <option value="中">中</option>
                    <option value="大">大</option>
                    <option value="特大">特大</option>
                </select><br><br>
            <button type="submit" class="btn btn-primary" id='add'>新增</button>
            <button type="reset" class="btn btn-secondary" id='re'>重設</button>
        </div>
    </main>

    <!-- 頁面底部 -->
    <footer class="admin-footer">
        <div class="container">
            <p>© 2024 後台管理系統. 保留所有權利.</p>
        </div>
    </footer>
<<<<<<< HEAD
    `
    document.getElementById('content').innerHTML = page;
    document.getElementById('add').onclick = () => {
        console.log(123);
    }
    document.getElementById('re').onclick = () => {
        document.querySelector('input[type="text"]').value = '';
    }
=======
    `;

    return page;
    
>>>>>>> 5332d31c55badb7144278188f9f4bff04d024d98
}

export { addProductPage };

