function frontstartPage(condition, data) {
    const renderHeader = () => `
        <!-- 功能區 -->
        <header class="admin-header">
            <div class="container">
                <nav>
                    <ul class="nav-links">
                        <li><a href="">首頁</a></li>
                        <li><a href="#">訂購</a></li>
                        <li><a href="">全部訂單</a></li>
                        <li><a href="./index.html" id="logout">登出</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    const renderStartPage = () => `
        ${renderHeader()}
        <!-- 主內容區 -->
        <main class="container">
            <div id="container">
                <header>
                    <h1>無章程飲料店</h1>
                    <p>歡迎訂購</p>
                </header>
                <section class="products">
                    <div class="product">
                        <div>
                            <h2 id="紅茶">紅茶</h2>
                            尺寸
                            <select id="size">
                                <option value="特大">特大</option>
                                <option value="大">大</option>
                                <option value="中">中</option>
                                <option value="小">小</option>
                            </select>
                        </div>
                        <button id="order">下定</button>
                    </div>
                </section>
            </div>
        </main>
    `;

    const renderOrderPage = () => `
        ${renderHeader()}
        <main class="container">
            <div>
                <p>你點的飲料是：${data.teaType}</p>
                <p>尺寸是：${data.teaSize}</p>
                <p>總金額：${calculateTotal(data.teaSize)}元</p>
                <button id="confirm">確認訂購</button>
            </div>
        </main>
    `;

    const calculateTotal = (size) => {
        const priceMap = {
            "特大": 70,
            "大": 60,
            "中": 50,
            "小": 40,
        };
        return priceMap[size] || 0;
    };

    let page = '';
    if (condition === 'start') {
        page = renderStartPage();
    } else if (condition === 'order') {
        page = renderOrderPage();
    }

    return page;
}

export { frontstartPage };
