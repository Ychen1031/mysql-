async function addMemberPage() {
    const page = `
    <!-- 主內容區 -->
    <main class="admin-content">
    <h2>資料庫管理 - 會員資料表</h2>
        <div class="container" id='content'>
            會員ID：<input type="text" id='mId'><br>
            姓名：<input type="text" id='name'><br>
            電子郵件：<input type="email" id='email'><br>
            電話：<input type="text" id='phone'><br>
            密碼：<input type="password" id='password'><br><br>
            <button type="submit" class="btn btn-primary" id='addMember'>新增會員</button>
            <button type="reset" class="btn btn-secondary" id='re'>重設</button>
        </div>
    </main>

    <!-- 頁面底部 -->
    <footer class="admin-footer">
        <div class="container">
            <p>© 2024 後台管理系統. 保留所有權利.</p>
        </div>
    </footer>
    `;

    return page;
}

export { addMemberPage };
