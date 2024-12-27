import { frontstartPage } from "./frontstartPage.js";

window.onload = () => {
    // 定義並初始化 condition 變數
    let condition = 'start'; // 或者根據你的需求設置初始值

    // 定義並初始化 page 變數
    const page = frontstartPage(condition);

    // 將頁面內容插入到 root 元素中
    document.getElementById('root').innerHTML = page;

    // 添加按鈕點擊事件監聽器
    if (condition === 'start') {
        document.getElementById('order').addEventListener('click', () => {
            const teaType = document.getElementById('紅茶').innerText;
            const teaSize = document.getElementById('size').value;
            console.log(`Tea Type: ${teaType}, Tea Size: ${teaSize}`);
            document.getElementById('root').innerHTML = frontstartPage('order', { teaType, teaSize });

            // 在更新 DOM 之後添加事件監聽器
            document.getElementById('confirm').addEventListener('click', () => {
                console.log('Order confirmed');
                let orderId = '004'; // replace with actual oid
                let memberId = 'yuzhang'; // replace with actual mid from member table
                let productId = '珍珠奶茶'; // replace with actual pid from product table
            
                let orderData = { 
                    mid: memberId,
                    oid: orderId,
                    quantity: '5', // replace with actual quantity
                    orderTime: new Date().toISOString().split('T')[0], // 使用當前日期
                    sel_table: 'order1'
                };
                
                axios.post('../../server/index.php?action=DoInsert', Qs.stringify(orderData))
                    .then(response => {
                        console.log('Data saved successfully:', response.data);
                        alert('訂單已確認！');
            
                        let containData = { 
                            pid: productId,
                            oid: orderId,
                            sel_table: 'contain'
                        };
                        return axios.post('../../server/index.php?action=DoInsert', Qs.stringify(containData));
                    })
                    .then(response => {
                        console.log('Data saved successfully:', response.data);
                        alert('訂單已確認！');
                    })
                    .catch(error => {
                        console.error('Error saving data:', error);
                    });
            });
        });
    }
};