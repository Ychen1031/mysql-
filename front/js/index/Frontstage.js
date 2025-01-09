import { frontstartPage } from "../pages/frontstartPage.js";
import { DoSelectOrder1 } from "../cruds/DoSelOrder1.js";

window.onload = async () => {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }

    // 定義並初始化 condition 變數
    let condition = 'start'; // 或者根據你的需求設置初始值

    // 定義並初始化 page 變數
    const page = await frontstartPage(condition);

    // 將頁面內容插入到 root 元素中
    document.getElementById('root').innerHTML = page;

    // 點擊 order 按鈕
    document.getElementById('order').onclick = async () => {
        condition = 'order';
        const page = await frontstartPage(condition);
        document.querySelector('.products').innerHTML = page;
    };

    // 點擊 select 按鈕
    document.getElementById('select').onclick = async () => {
        condition = 'selectOrder';
        const page = await frontstartPage(condition);
        document.querySelector('.products').innerHTML = page;
    };

    // 为动态生成的元素使用事件委托
    document.querySelector('.products').addEventListener('click', async (event) => {
        if (event.target.classList.contains('btn-order')) {
            const productElement = event.target.closest('.product');

            const data = {
                sel_table: 'order2'
            };

            // 確保生成唯一的 oid
            const oid = await DoSelectOrder1(data);
            console.log(oid);

            // 初始化 orderData
            const orderData = {
                oId: oid,
                mId: localStorage.getItem("mId"),
                quantity: productElement.querySelector('input[type="number"]').value,
                orderTime: new Date().toISOString().slice(0, 19).replace('T', ' '),  // 格式化日期時間
                sel_table: 'order1',
            };
            

            // 初始化 containData
            const containData = {
                pId: productElement.querySelector('option').value,
                oId: oid,
                sel_table: 'contain',
            };

            // 發送請求處理訂單資料
            axios.post('../../server/index.php?action=DoInsert', Qs.stringify(orderData))
                .then(response => {
                    if (response.data.message === '新增成功') {
                        // 成功後處理 containData
                        axios.post('../../server/index.php?action=DoInsert', Qs.stringify(containData))
                            .then(response => {
                                if (response.data.message === '新增成功' || response.data.message === '更新成功') {
                                    alert('訂單已確認！');
                                } else {
                                    alert('訂單確認失敗，請稍後再試。');
                                    console.log(response.data.message);
                                }
                            })
                            .catch(error => {
                                console.error('Error saving contain data:', error);
                                alert('訂單確認失敗，請稍後再試。');
                            });
                    } else {
                        alert('訂單確認失敗，伺服器返回訊息：' + response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error saving order data:', error);
                    alert('訂單確認失敗，請稍後再試。');
                });
        }
    });
};
