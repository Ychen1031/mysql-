import { DoSelectProduct } from "../cruds/DoSelProduct.js";

async function frontstartPage(condition) {
    let mId = localStorage.getItem("mId");
    const renderHeader = () => `
        <!-- 功能區 -->
        <header class="admin-header">
            <div class="container">
                歡迎 ${mId} 回來！
                <nav>
                    <ul class="nav-links">
                        <li><a href="">首頁</a></li>
                        <li><a href="#" id="order">訂購</a></li>
                        <li><a href="#" id="select">歷史訂單</a></li>
                        <li><a href="./index.html" id="logout">登出</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <!-- 主內容區 -->
        <main class="container">
            <div id="container">
                <header>
                    <h1>無章程飲料店</h1>
                    <p>歡迎訂購</p>
                </header>
                
                <div class="products">
                    <!-- 這裡會動態生成產品列表 -->
                </div>
            </div>
        </main>
    `;

    let Data = {
        sel_table: 'product'
    };

    let products = await DoSelectProduct(Data);

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
        return productHtml;
    };

    const fetchOrders = async (mId) => {
        let Data1 = {
            sel_table: 'order1',
            mId: mId
        };
        try {
            const response = await axios.post('../../server/index.php?action=DoSelect', Qs.stringify(Data1));
            return response.data.result || [];
        } catch (error) {
            console.error('Error fetching orders:', error);
            return [];
        }
    };

    const renderOrderPage = (orders) => {
        if (!Array.isArray(orders) || orders.length === 0) {
            return `<p>目前沒有可用訂單。</p>`;
        }

        let orderRows = orders.reverse().map(order => `
            <tr>
            <td>${order.orderTime}</td>
            <td>${order.pName}</td>
            <td>${order.price}</td>
            <td>${order.quantity}</td>
            <td>${order.totoalPrice}</td>
            </tr>
        `).join('');

        return `
            <table>
                <tr>
                    <td>時間</td>
                    <td>產品</td>
                    <td>價格</td>
                    <td>數量</td>
                    <td>總價</td>
                </tr>
                ${orderRows}
            </table>
        `;
    };

    let page = '';
    if (condition === 'start') {
        page = renderHeader();
    } else if (condition === 'selectOrder') {
        const orders = await fetchOrders(mId);
        page = renderOrderPage(orders);
    } else if (condition === 'order') {
        page = renderProducts(products);
    }
    return page;
}

export { frontstartPage };