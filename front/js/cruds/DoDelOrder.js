function DoDelOrder(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const firstCell = row.querySelector('td:first-child');
    const oId = firstCell.textContent; // 獲取訂單 ID

    if (!confirm(`確定要刪除訂單編號 ${oId} 嗎？`)) {
        return; // 如果用戶取消操作，直接返回
    }

    // 準備發送的資料
    let data = {
        "oId": oId,
        "sel_table": sel_table
    };

    // 發送刪除請求
    axios.post('../../server/index.php?action=DoDelete', Qs.stringify(data))
        .then(res => {
            const response = res.data;
            if (response.status === 200 || response.status === 204) {
                // 刪除成功，移除該行
                row.remove();
                alert(`訂單編號 ${oId} 已成功刪除`);
                // 如果需要，您也可以重新載入資料或更新顯示
                // 比如重新加載表格內容
                // loadTableData(); 
            } else {
                // 顯示錯誤訊息
                alert(response.message || `刪除失敗，請稍後再試！`);
            }
        })
        .catch(err => {
            console.error("刪除訂單時發生錯誤：", err);
            alert("刪除失敗，請稍後再試！");
        });
}

export { DoDelOrder };
