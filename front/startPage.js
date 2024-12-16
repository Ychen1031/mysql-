function startPage() {
    const page = `
    <!-- 頁面標題 -->
    <header class="admin-header">
        <div class="container">
            <h1>飲料訂購後台管理系統</h1>
            <nav>
            <ul class="nav-links">
                <li><a href="#">儀表板</a></li>
                <li class="dropdown">
                    <a href="#">資料管理</a>
                    <!-- 下拉式選單 -->
                    <ul class="dropdown-menu">
                        <li><a href="#" id='sel_product'>產品管理</a></li>
                        <li><a href="#">訂單管理</a></li>
                        <li><a href="#">庫存管理</a></li>
                    </ul>
                </li>
                <li><a href="#">用戶管理</a></li>
                <li><a href="#">系統設定</a></li>
            </ul>
        </nav>
        </div>
    </header>

    <!-- 主內容區 -->
    <main class="admin-content">
        <div class="container">
            <h2>資料庫管理 - Product 資料表</h2>
            <p><div id="content"></div></p>

            
            
                
            
        </div>
    </main>

    <!-- 頁面底部 -->
    <footer class="admin-footer">
        <div class="container">
            <p>© 2024 後台管理系統. 保留所有權利.</p>
        </div>
    </footer>
    <h1>飲料訂購資料庫</h1>
    <button id="home">首頁</button>
    <button id="product">產品</button>
    <button id="order1">訂購</button>
    <button id="member">會員</button>
    <div id="crud"></div>

    `
    return page;
}

export { startPage };