import { frontstartPage } from "./frontstartPage.js";
import { DoSelectOrder1 } from "../cruds/DoSelectOrder1.js";

window.onload = async () => {
    // 定義並初始化 condition 變數
    let condition = 'start'; // 或者根據你的需求設置初始值

    // 定義並初始化 page 變數
    const page = await frontstartPage(condition);

    // 將頁面內容插入到 root 元素中
    document.getElementById('root').innerHTML = page;

    // 为动态生成的元素使用事件委托
    document.querySelector('.products').addEventListener('click', async (event) => {
        if (event.target.classList.contains('btn-order')) {
            const productElement = event.target.closest('.product');

            const data = {
                sel_table: 'order1'
            };

            // 等待 DoSelectOrder1 完成並獲取 oid
            const oid = await DoSelectOrder1(data);

            const orderData = {
                oId: oid,
                mId: localStorage.getItem("mId"),
                quantity: productElement.querySelector('input[type="number"]').value,
                orderTime: new Date().toLocaleString(),
                sel_table: 'order1',
            };
            const containData = {
                pId: productElement.querySelector('option').value,
                oId: oid,
                sel_table: 'contain',
            };

            // 在這裡處理 orderData，例如發送到伺服器
            console.log(containData);
            axios.post('../../server/index.php?action=DoInsert', Qs.stringify(orderData))
                .then(response => {
                    if (response.data.message === '新增成功') {
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
                                console.error('Error saving data:', error);
                    alert('訂單確認失敗，請稍後再試。');
                });
                    } else {
                        alert('訂單確認失敗，請稍後再試。');
                    }
                })
                .catch(error => {
                    console.error('Error saving data:', error);
                    alert('訂單確認失敗，請稍後再試。');
                });
            

        } else if (event.target.classList.contains('btn-delete')) {
            console.log('刪除按钮点击');
        }
    });
};