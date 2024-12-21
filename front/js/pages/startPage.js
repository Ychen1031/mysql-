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
                <li><a href="#" id='sel_member'>會員管理</a></li>
                <li><a href="#">系統設定</a></li>
                <li><a href="./index.html" id='logout'>登出</a></li>
            </ul>
        </nav>
        </div>
    </header>

    <!-- 主內容區 -->
    <main class="admin-content">
        <div class="container">
            <p><div id="content"></div></p>           
        </div>
    </main>

    <!-- 頁面底部 -->
    <footer class="admin-footer">
        <div class="container">
            <p>© 2024 後台管理系統. 保留所有權利.</p>
        </div>
    </footer>`;
    
    return page;
}

export { startPage };