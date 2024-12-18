import { addProductPage } from "./addProductPage.js";
import { showProduct } from "./showProduct.js";
import { startPage } from "./startPage.js"
import { showMember } from "./showMember.js";

window.onload = () => {
    document.getElementById('root').innerHTML = startPage();

    document.getElementById('sel_product').onclick = async () => {
        document.getElementById('content').innerHTML = await showProduct();

        // 新增產品資料
        document.getElementById('add_product').onclick = async () => {
          
            document.getElementById('content').innerHTML = await addProductPage();
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
        }
<<<<<<< HEAD


    document.getElementById('sel_member').onclick = async () => {
        document.getElementById('content').innerHTML = await showMember();
=======
    }
    
    // 查詢會員
    document.getElementById('sel_member').onclick = async () => {
        console.log(123);
        
        document.getElementById('content').innerHTML = await showMember();
    }
>>>>>>> 5332d31c55badb7144278188f9f4bff04d024d98

    document.getElementById('product').onclick = () => {
        document.getElementById('crud').innerHTML = `
        <button id='add_product'>新增</button>
        <button id='upd_product'>修改</button>
        <button id='del_product'>刪除</button>
        <button id='sel_product'>查詢</button>
        `
        
    }
}