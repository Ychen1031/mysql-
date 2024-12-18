import { addProductPage } from "./addProductPage.js";
import { showProduct } from "./showProduct.js";
import { startPage } from "./startPage.js";
import { showMember } from "./showMember.js";
import { addMemberPage } from "./addMemberPage.js";
import { DoAddProduct } from "./doAddProduct.js";
import { DoUpdProduct } from "./DoUpdProduct.js";
import { DoDelProduct } from "./DoDelProduct.js";

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

    // 產品查詢
    document.getElementById('sel_product').onclick = async () => {
        document.getElementById('content').innerHTML = await showProduct();

        // 重新整理
        document.getElementById('refresh_product').onclick = async () => {
            await document.getElementById('sel_product').onclick();
        };

        document.getElementById('add_product').onclick = async () => {
            document.getElementById('content').innerHTML = await addProductPage();

            // 新增產品
            document.getElementById('add').onclick = () => {
                DoAddProduct();
            }

            // 重設按鈕
            document.getElementById('re').onclick = () => {
                resetForm();  // 只清空輸入欄資料
            };
        }
        // 刪除產品
        document.querySelectorAll('#del_product').forEach(button => {
            button.onclick = (event) => {
                DoDelProduct(event);
            };
            
        });
        // 更新產品
        document.querySelectorAll('#upd_product').forEach(button => {
            button.onclick = (event) => {
                DoUpdProduct(event);
            }

        })
    };

    // 會員頁面
    document.getElementById('sel_member').onclick = async () => {
        document.getElementById('content').innerHTML = await showMember();

        document.getElementById('add_member').onclick = async () => {
            document.getElementById('content').innerHTML = await addMemberPage();

            // 新增會員
            document.getElementById('addMember').onclick = () => {
                const mId = document.getElementById('mId').value;
                let data = {
                    "mId": mId,
                    "name": document.getElementById('name').value,
                    "email": document.getElementById('email').value,
                    'phone': document.getElementById('phone').value,
                    'password': document.getElementById('password').value
                };

                axios.post('../server/index.php?action=member_DoInsert', Qs.stringify(data))
                    .then(res => {
                        const response = res['data'];
                        
                        document.getElementById('content').innerHTML = `<div class="message">編號${mId}${response['message']}</div>`;
                    })
                    .catch(err => {
                        console.error(err);
                    })
            };

            // 重設按鈕
            document.getElementById('re').onclick = () => {
                resetForm();  // 只清空輸入欄資料
            };
        };
    };
};
