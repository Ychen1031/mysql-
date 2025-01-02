function DoDelOrder(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const firstCell = row.querySelector('td:first-child');
    const oId = firstCell.textContent; // 獲取訂單 ID

    if (!confirm(`確定要刪除訂單編號 ${oId} 嗎？`)) {
        return; // 如果用戶取消操作，直接返回
    }

    let data = {
        "oId": oId,
        "sel_table": sel_table
    };

    axios.post('../../server/index.php?action=DoDelete', Qs.stringify(data))
    .then(res => {
        const response = res['data'];
        document.getElementById('content').innerHTML = `<div class="message">編號${oId} ${response['message']}</div>`;
    })
    .catch(err => {
        console.error(err); 
    });
}

export { DoDelOrder };
