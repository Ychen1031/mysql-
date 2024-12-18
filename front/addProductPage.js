function addProductPage() {
    const page = `

    <!-- 主內容區 -->
    <main class="admin-content">
        <div class="container">
            產品ID：<input type="text"><br>
            產品名稱：<input type="text"><br>
            種類：<input type="text"><br>
            價格：<input type="text"><br>
            尺寸：<select>
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
    `
    document.getElementById('content').innerHTML = page;
    document.getElementById('add').onclick = () => {
        console.log(123);
    }
}

export { addProductPage };

