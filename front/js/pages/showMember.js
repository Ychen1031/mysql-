async function showMember(sel_table) {
    try {
        let data = {
            "sel_table": sel_table
        };

        // 發送 API 請求獲取會員資料
        return axios.post("../../server/index.php?action=DoSelect", Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            let str = "<h2>資料庫管理 - Member 資料表</h2>";

            // 根據 API 回應狀態碼處理資料
            switch (response['status']) {
                case 200:
                    const rows = response['result'];
                    str += `
                    <table class="data-table">
                        <!-- 操作按鈕 -->
                        <div class="action-buttons">
                            <button class="btn btn-add" id="add_member">新增會員</button>
                            <button class="btn btn-refresh" id="refresh_member">重新整理</button>
                        </div>
                        <thead>
                            <tr>
                                <th>會員ID</th>
                                <th>會員姓名</th>
                                <th>電話</th>
                                <th>Email</th>
                                <th>密碼</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>`;
                    rows.forEach((member, index) => {
                        str += `
                            <tr data-index="${index}">
                                <td>${member.mId}</td>
                                <td>${member.name}</td>
                                <td>${member.phone}</td>
                                <td>${member.email}</td>
                                <td>${member.password}</td>
                                <td>
                                    <button class="btn btn-edit" id="upd_member">編輯</button>
                                    <button class="btn btn-delete" id="del_member">刪除</button>
                                </td>
                            </tr>`;
                    });
                    str += `
                        </tbody>
                    </table>`;
                    break;
                default:
                    str = `<div class="error-message">${response['message']}</div>`;
                    break;
            }
            return str;
        })
        .catch(err => {
            console.error(err);
        });

    } catch (error) {
        console.error(error);
    }
}

export { showMember };