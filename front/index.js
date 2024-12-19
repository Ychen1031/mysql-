import { addProductPage } from "./addProductPage.js";
import { showProduct } from "./showProduct.js";
import { startPage } from "./startPage.js";
import { showMember } from "./showMember.js";
import { addMemberPage } from "./addMemberPage.js";
import { DoAddProduct } from "./doAddProduct.js";
import { DoUpdProduct } from "./DoUpdProduct.js";
import { DoDelProduct } from "./DoDelProduct.js";
import { DoAddMember } from "./DoAddMember.js";
import { DoDelMember } from "./DoDelMember.js";
import { DoUpdMember } from "./DoUpdMember.js";

window.onload = () => {
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
        document.getElementById('content').innerHTML = await showProduct();

        // 重新整理
        document.getElementById('refresh_product').onclick = async () => {
            await document.getElementById('sel_product').onclick();
        };

        // 新增產品
        document.getElementById('add_product').onclick = async () => {
            document.getElementById('content').innerHTML = await addProductPage();

            document.getElementById('add').onclick = () => {
                DoAddProduct();
            };

            document.getElementById('re').onclick = () => {
                resetForm(); // 只清空輸入欄資料
            };
        };

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
            };
        });
    };

    // 會員頁面
    document.getElementById('sel_member').onclick = async () => {
        document.getElementById('content').innerHTML = await showMember();

        // 重新整理
        document.getElementById('refresh_member').onclick = async () => {
            await document.getElementById('sel_member').onclick();
        };

        // 新增會員
        document.getElementById('add_member').onclick = async () => {
            document.getElementById('content').innerHTML = await addMemberPage();

            document.getElementById('addMember').onclick = () => {
                DoAddMember();
            };

            document.getElementById('re').onclick = () => {
                resetForm(); // 只清空輸入欄資料
            };
        };

        // 刪除會員
        document.querySelectorAll('#del_member').forEach(button => {
            button.onclick = (event) => {
                DoDelMember(event);
            };
        });

        // 更新會員
        document.querySelectorAll('#upd_member').forEach(button => {
            button.onclick = (event) => {
                DoUpdMember(event);
            };
        });
    };
};
