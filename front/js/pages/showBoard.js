function showBoard() {
    const page = `
    <main class="admin-content">
        <div class="container">
        <h2>儀表板</h2>
        <div class="dashboard">
            <div class="dashboard-item">
                <h3>總銷售額</h3>
                <p name="info"></p>
            </div>
            <div class="dashboard-item">
                <h3>總訂單數量</h3>
                <p name="info"></p>
            </div>
            <div class="dashboard-item">
                <h3>會員總數</h3>
                <p name="info"></p>
            </div>
            <div class="dashboard-item">
                <h3>產品總數</h3>
                <p name="info"></p>
            </div>
            </div>
        </div>
    </main>
    `;

    return page;
}

export { showBoard };