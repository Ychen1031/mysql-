async function showProduct() {
    try {
        const res = await axios.get('../server/index.php?action=DoSelect');
        const response = res['data'];
        let str = "";
        switch (response['status']) {
            case 200:
                let rows = response['result'];
                str += `
                <table class="data-table">
            <thead>
                <tr>
                    <th>產品ID</th>
                    <th>產品名稱</th>
                    <th>種類</th>
                    <th>價格</th>
                    <th>尺寸</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>`;
                rows.forEach(element => {
                    str += `<tbody><tr>
                        <td>${element.pId}</td>
                        <td>${element.pName}</td>
                        <td>${element.category}</td>
                        <td>${element.price}</td>
                        <td>${element.size}</td>
                        <td>
                        <button class="btn btn-edit" id='upd_product'>編輯</button>
                        <button class="btn btn-delete" id='del_product'>刪除</button>
                    </td>
                    </tr><tbody></table>`;
                });
                str += `</tbody></table>`;
                str += `<!-- 操作按鈕 -->
                        <p><div class="action-buttons">
                            <button class="btn btn-add" id='add_product'>新增資料</button>
                            <button class="btn btn-refresh">重新整理</button>
                        </div></p></tbody>`;
                break;
            default:
                str = response['message'];
                break;
        }
        return str;
    } catch (err) {
        console.error(err);
        return 'Error loading product data';
    }
}

export { showProduct };