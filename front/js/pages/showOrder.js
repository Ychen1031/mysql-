async function showOrder(sel_table) {
    try {
        let data = {
            "sel_table": sel_table
        };

        return axios.post("../../server/index.php?action=DoSelect", Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            console.log(response);
            
            let str = `<h2>資料庫管理 - Order 資料表</h2>
            <!-- 操作按鈕 -->
            <p><div class="action-buttons">
                <button class="btn btn-add" id='add_order'>新增資料</button>
                <button class="btn btn-refresh" id='refresh_order'>重新整理</button>
            </div></p>`;
            switch (response['status']) {
                case 200:
                    let rows = response['result'];
                    str += `
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>訂單ID</th>
                                <th>客戶名稱</th>
                                <th>訂購數量</th>
                                <th>訂單時間</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>`;
                    rows.forEach(element => {
                        str += `
                            <tr>
                                <td>${element.mId}</td>
                                <td>${element.oId}</td>
                                <td>${element.quantity}</td>
                                <td>${element.orderTime}</td>
                                <td>
                                    <button class="btn btn-edit" id='upd_order'>編輯</button>
                                    <button class="btn btn-delete" id='del_order'>刪除</button>
                                </td>
                            </tr>`;
                    });
                    str += `</tbody>
                    </table>`;
                    break;
                default:
                    str = response['message'];
                    break;
            }
            return str;
        });

    } catch (err) {
        console.error(err);
        return 'Error loading order data';
    }
}

export { showOrder };
