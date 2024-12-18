async function showMember() {
    try {
        // 發送 API 請求獲取會員資料
        const res = await axios.get('../server/index.php?action=member_DoSelect');
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
<<<<<<<<< Temporary merge branch 1
                            <td>${member.mId}</td>
                            <td>${member.Name}</td>
                            <td>${member.Phone}</td>
                            <td>${member.Email}</td>
                            <td>${member.Password}</td>
=========
                            <td>${member.mID}</td>
                            <td>${member.name}</td>
                            <td>${member.phone}</td>
                            <td>${member.email}</td>
                            <td>${member.password}</td>
                            <td>
                                <button class="btn btn-edit" data-id="${member.MemberID}" id="upd_member_${member.MemberID}">編輯</button>
                                <button class="btn btn-delete" data-id="${member.MemberID}" id="del_member_${member.MemberID}">刪除</button>
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
    } catch (err) {
        console.error(err);
        return `<div class="error-message">Error loading member data. Please try again later.</div>`;
    }
}

// 綁定會員管理的按鈕事件
function bindMemberEvents() {
    // 新增會員
    document.getElementById('add_member')?.addEventListener('click', () => {
        alert('新增會員功能尚未實現！');
    });

    // 重新整理會員列表
    document.getElementById('refresh_member')?.addEventListener('click', async () => {
        const memberContainer = document.getElementById('crud'); // 假設會員表格插入在 #crud 容器內
        if (memberContainer) {
            memberContainer.innerHTML = await showMember();
            bindMemberEvents(); // 再次綁定事件
        }
    });

    // 編輯會員
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', () => {
            const memberId = button.getAttribute('data-id');
            alert(`編輯功能尚未實現，會員 ID: ${memberId}`);
        });
    });

    // 刪除會員
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', () => {
            const memberId = button.getAttribute('data-id');
            alert(`刪除功能尚未實現，會員 ID: ${memberId}`);
        });
    });
}

export { showMember, bindMemberEvents };
