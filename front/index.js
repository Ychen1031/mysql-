import { addProductPage } from "./addProductPage.js";
import { showProduct } from "./showProduct.js";
import { startPage } from "./startPage.js";
import { showMember } from "./showMember.js";
import { addMemberPage } from "./addMemberPage.js";

window.onload = () => {
    document.getElementById('root').innerHTML = startPage();

    // 重設功能：清空所有輸入欄，包括電子郵件和密碼
    function resetForm() {
        // 清空所有的輸入框、選擇框、電子郵件與密碼欄位
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="password"], select');
        inputs.forEach(input => {
            input.value = '';  // 清空每個輸入框的內容
        });
    }

    // 產品頁面
    document.getElementById('sel_product').onclick = async () => {
        document.getElementById('content').innerHTML = await showProduct();

        document.getElementById('add_product').onclick = async () => {
            document.getElementById('content').innerHTML = await addProductPage();

            // 新增產品
            document.getElementById('add').onclick = () => {
                let data = {
                    "pId": document.getElementById('pId').value,
                    "pName": document.getElementById('pName').value,
                    "category": document.getElementById('category').value,
                    'price': document.getElementById('price').value,
                    'size': document.getElementById('size').value
                };

                axios.post('../server/index.php?action=product_DoInsert', Qs.stringify(data))
                    .then(res => {
                        const response = res['data'];
                        document.getElementById('content').innerHTML = `<div class="message">${response['message']}</div>`;
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }

            // 重設按鈕
            document.getElementById('re').onclick = () => {
                resetForm();  // 只清空輸入欄資料
            };
        }
<<<<<<<<< Temporary merge branch 1


    document.getElementById('sel_member').onclick = async () => {
        document.getElementById('content').innerHTML = await showMember();
=========
    }
    
    // 查詢會員
    document.getElementById('sel_member').onclick = async () => {
        console.log(123);
        
        document.getElementById('content').innerHTML = await showMember();
    }
>>>>>>>>> Temporary merge branch 2

    document.getElementById('product').onclick = () => {
        document.getElementById('crud').innerHTML = `
        <button id='add_product'>新增</button>
        <button id='upd_product'>修改</button>
        <button id='del_product'>刪除</button>
        <button id='sel_product'>查詢</button>
        <button id='re'>重設</button>  <!-- 重設按鈕 -->
        `;
    };

    document.getElementById('member').onclick = () => {
        document.getElementById('crud').innerHTML = `
        <button id='add_member'>新增</button>
        <button id='upd_member'>修改</button>
        <button id='del_member'>刪除</button>
        <button id='sel_member'>查詢</button>
        <button id='re'>重設</button>  <!-- 重設按鈕 -->
        `;
    };
};
