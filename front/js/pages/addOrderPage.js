async function addOrderPage() {
    const page = `
    <!-- 主內容區 -->
    <main class="admin-content">
    <h2>資料庫管理 - 訂單資料表</h2>
        <div class="container" id='content'>
            訂單ID：<input type="text" id='oId'><br>
            客戶名稱：<input type="text" id='name'><br>
            訂購數量：<input type="number" id='quantity'><br>
            總金額：<input type="number" id='totalPrice'><br>
            訂單時間：<input type="datetime-local" id='orderTime'><br>
            付款方式：
            <select id='paymentMethod'>
                <option value="credit_card">信用卡</option>
                <option value="paypal">PayPal</option>
                <option value="cash">現金</option>
            </select><br><br>
            <button type="submit" class="btn btn-primary" id='addOrder'>新增訂單</button>
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

export { addOrderPage };
