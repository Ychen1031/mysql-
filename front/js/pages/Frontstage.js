import { frontstartPage } from "./frontstartPage.js";

window.onload = () => {
    // 定義並初始化 condition 變數
    let condition = 'start'; // 或者根據你的需求設置初始值

    // 定義並初始化 page 變數
    const page = frontstartPage(condition);

    // 將頁面內容插入到 root 元素中
    document.getElementById('root').innerHTML = page;
    console.log(localStorage.getItem("mId"));

    // 為所有訂購按鈕添加事件監聽器
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', (event) => {
            console.log('Order button clicked:', event.target);
            const productId = event.target.getAttribute('data-id');
            const sizeElement = document.getElementById(`size-${productId}`);
            const selectedSize = sizeElement.options[sizeElement.selectedIndex].text;
            const selectedPrice = sizeElement.value;

            const orderData = {
                mId: localStorage.getItem("mId"),
                pId: productId,
                size: selectedSize,
                price: selectedPrice
            };

            axios.post('../../server/index.php?action=DoInsert', Qs.stringify(orderData))
                .then(response => {
                    console.log('Data saved successfully:', response.data);
                    alert('訂單已確認！');
                })
                .catch(error => {
                    console.error('Error saving data:', error);
                    alert('訂單確認失敗，請稍後再試。');
                });
        });
    });
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.onclick = (event) => {
            console.log('Delete button clicked:', event.target);
        };
    });
};