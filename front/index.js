import { showProduct } from "./showProduct.js";
import { startPage } from "./startPage.js"

window.onload = () => {
    document.getElementById('root').innerHTML = startPage();

    document.getElementById('sel_product').onclick = async () => {
        document.getElementById('content').innerHTML = await showProduct();
    }

    document.getElementById('product').onclick = () => {
        document.getElementById('crud').innerHTML = `
        <button id='add_product'>新增</button>
        <button id='upd_product'>修改</button>
        <button id='del_product'>刪除</button>
        <button id='sel_product'>查詢</button>
        `
        
    }
}