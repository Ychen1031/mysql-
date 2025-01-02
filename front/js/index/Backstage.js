import { addProductPage } from "../pages/addProductPage.js";
import { showProduct } from "../pages/showProduct.js";
import { startPage } from "../pages/startPage.js";
import { showMember } from "../pages/showMember.js";
import { addMemberPage } from "../pages/addMemberPage.js";
import { DoAddProduct } from "../cruds/DoAddProduct.js";
import { DoUpdProduct } from "../cruds/DoUpdProduct.js";
import { DoDelProduct } from "../cruds/DoDelProduct.js";
import { DoAddMember } from "../cruds/DoAddMember.js";
import { DoDelMember } from "../cruds/DoDelMember.js";
import { DoUpdMember } from "../cruds/DoUpdMember.js";
import { addOrderPage } from "../pages/addOrderPage.js";
import { showOrder } from "../pages/showOrder.js";
import { DoDelOrder } from "../cruds/DoDelOrder.js";
import { DoUpdOrder } from "../cruds/DoUpdOrder.js";
import { DoAddOrder } from "../cruds/DoAddOrder.js";

window.onload = () => {
    // 檢查是否有驗證通過的 sessionStorage
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
    
    document.getElementById('root').innerHTML = startPage();

    // 重設功能：清空所有輸入欄，包括電子郵件和密碼
    function resetForm() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="password"], select');
        inputs.forEach(input => {
            input.value = ''; // 清空每個輸入框的內容
        });
    }

    // 產品查詢
    document.getElementById('sel_product').onclick = async () => {
        const sel_table = document.getElementById('sel_product').id.replace('sel_', '');
        document.getElementById('content').innerHTML = await showProduct(sel_table);

        // 重新整理
        document.getElementById('refresh_product').onclick = async () => {
            await document.getElementById('sel_product').onclick();
        };

        // 新增產品
        document.getElementById('add_product').onclick = async () => {
            document.getElementById('content').innerHTML = await addProductPage();

            document.getElementById('add').onclick = () => {
                DoAddProduct(sel_table);
            };

            document.getElementById('re').onclick = () => {
                resetForm(); // 只清空輸入欄資料
            };
        };

        // 刪除產品
        document.querySelectorAll('#del_product').forEach(button => {
            button.onclick = (event) => {
                DoDelProduct(event, sel_table);
            };
        });

        // 更新產品
        document.querySelectorAll('#upd_product').forEach(button => {
            button.onclick = (event) => {
                DoUpdProduct(event, sel_table);
            };
        });
    };

    // 會員頁面
    document.getElementById('sel_member').onclick = async () => {
        const sel_table = document.getElementById('sel_member').id.replace('sel_', '');
        document.getElementById('content').innerHTML = await showMember(sel_table);

        // 重新整理
        document.getElementById('refresh_member').onclick = async () => {
            await document.getElementById('sel_member').onclick();
        };

        // 新增會員
        document.getElementById('add_member').onclick = async () => {
            document.getElementById('content').innerHTML = await addMemberPage();

            document.getElementById('addMember').onclick = () => {
                DoAddMember(sel_table);
            };

            document.getElementById('re').onclick = () => {
                resetForm(); // 只清空輸入欄資料
            };
        };

        // 刪除會員
        document.querySelectorAll('#del_member').forEach(button => {
            button.onclick = (event) => {
                DoDelMember(event, sel_table);
            };
        });

        // 更新會員
        document.querySelectorAll('#upd_member').forEach(button => {
            button.onclick = (event) => {
                DoUpdMember(event, sel_table);
            };
        });
    };

    // 訂單頁面
    document.getElementById('sel_order1').onclick = async () => {
        const sel_table = document.getElementById('sel_order1').id.replace('sel_', '');
        document.getElementById('content').innerHTML = await showOrder(sel_table);

        // 重新整理
        document.getElementById('refresh_order').onclick = async () => {
            await document.getElementById('sel_order1').onclick();
        };

        // 新增訂單
        document.getElementById('add_order').onclick = async () => {
            document.getElementById('content').innerHTML = await addOrderPage();

            document.getElementById('addOrder').onclick = () => {
                DoAddOrder(sel_table);
            };

            document.getElementById('re').onclick = () => {
                resetForm(); // 只清空輸入欄資料
            };
        };

        // 刪除訂單
        document.querySelectorAll('#del_order').forEach(button => {
            button.onclick = (event) => {
                DoDelOrder(event, sel_table);
            };
        });

        // 更新訂單
        document.querySelectorAll('#upd_order').forEach(button => {
            button.onclick = (event) => {
                DoUpdOrder(event, sel_table);
            };
        });
    };
};
