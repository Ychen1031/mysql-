function DoUpdOrder(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent);
    const [oId, mId, quantity, orderTime] = rowData.slice(0, 4);

    // 將訂單時間轉換為符合 datetime-local 格式
    const formattedOrderTime = new Date(orderTime).toISOString().slice(0, 16);

    // 修改表格中的每個可編輯欄位
    cells[1].innerHTML = `<input type="text" value="${mId}" id="updMId">`;
    cells[2].innerHTML = `<input type="number" value="${quantity}" id="updQuantity">`;
    cells[3].innerHTML = `<input type="datetime-local" value="${formattedOrderTime}" id="updOrderTime">`;

    // 更改按鈕為保存按鈕，並綁定保存事件
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-edit';
    saveButton.textContent = '確定';
    saveButton.addEventListener('click', () => {
        const updatedData = {
            oId: oId,
            mId: document.getElementById('updMId').value,
            quantity: document.getElementById('updQuantity').value,
            orderTime: document.getElementById('updOrderTime').value.replace('T', ' '),
            sel_table: sel_table
        };

        axios.post('../../server/index.php?action=DoUpdate', Qs.stringify(updatedData))
            .then(res => {
                const response = res.data;
                if (response.status === 200 || response.status === 204) {
                    // 更新表格內容
                    cells[1].innerHTML = updatedData.mId;
                    cells[2].innerHTML = updatedData.quantity;
                    cells[3].innerHTML = updatedData.orderTime.replace('T', ' ');
                    // 恢復原始的編輯按鈕
                    saveButton.replaceWith(target);
                } else {
                    alert(response.message || "更新失敗");
                }
            })
            .catch(err => {
                console.error("更新訂單時發生錯誤：", err);
                alert("更新失敗，請稍後再試！");
            });
    });

    // 將編輯按鈕替換為保存按鈕
    target.replaceWith(saveButton);
}

export { DoUpdOrder };
