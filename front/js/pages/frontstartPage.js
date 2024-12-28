async function frontstartPage(condition, data) {
    let mId = localStorage.getItem("mId")
    const renderHeader = () => `
        <!-- 功能區 -->
        <header class="admin-header">
            <div class="container">
                歡迎 ${mId} 回來！
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
    let Data = {
        sel_table: 'product'
    };
    // select all products
    axios.post('../../server/index.php?action=DoSelect', Qs.stringify(Data))
    .then(response => {
        // 確認 `result` 是否存在，且為陣列
        let rawData = Array.isArray(response.data.result) ? response.data.result : [];
        if (rawData.length === 0) {
            console.warn('No products found in the response.');
        }
        
        // 將資料整合
        let groupedProducts = groupByProductName(rawData);

        renderProducts(groupedProducts); // 傳入處理後的產品資料進行渲染
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    // 資料分組與整合的函數
    const groupByProductName = (data) => {
        let grouped = {};

        data.forEach(item => {
            // 如果該產品名稱尚未在分組中，初始化為空物件
            if (!grouped[item.pName]) {
                grouped[item.pName] = {
                    pName: item.pName,
                    category: item.category,
                    sizes: [] // 用於儲存尺寸與價格
                };
            }

            // 將尺寸與價格加入對應的產品中
            grouped[item.pName].sizes.push({
                name: item.size,
                price: item.price,
                pId: item.pId
            });
        });

        // 將物件轉為陣列形式
        return Object.values(grouped);
    };

    // 渲染產品資料的函數
    const renderProducts = (products) => {
        if (!Array.isArray(products) || products.length === 0) {
            document.querySelector('.products').innerHTML = `<p>No products available at the moment.</p>`;
            return;
        }

        let productHtml = products.map(product => `
            <div class="product">
            <div>
                <h2 id="${product.pId}">${product.pName}</h2>
                尺寸
                <select id="size-${product.pId}">
                ${product.sizes.map(size => `<option class='pId' id='${size.pId}' value="${size.pId}">${size.name}</option>`).join('')}
                </select>
                <input type="number" id="quantity-${product.pId}" value="1" min="1" max="10">
            </div>
            <button class="btn btn-order" id='add_order'>下訂</button>
            </div>
        `).join('');

        // 插入到指定的區域
        document.querySelector('.products').innerHTML = productHtml;
    };

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
                    <!-- 動態產品將插入此處 -->
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

    let page = '';
    if (condition === 'start') {
        page = renderStartPage();
    } else if (condition === 'order') {
        page = renderOrderPage();
    }

    return page;
}

export { frontstartPage };
