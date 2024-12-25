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
                alert('訂單已確認！');
                axios.post('../../server/index.php?action=save_order', Qs.stringify({
                    oid: '001', // replace with actual oid
                    mid: '001', // replace with actual mid
                    pid: '001', // replace with actual pid
                    quantity: '5' // replace with actual quantity
                }))
                .then(response => {
                    console.log('Data saved successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error saving data:', error);
                });
            });
        });
    }
};