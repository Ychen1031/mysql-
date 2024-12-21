function DoUpdProduct(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent);
    const [id, name, category, price, size] = rowData.slice(0, 5);

    cells[1].innerHTML = `<input type="text" value="${name}" id="updName">`;
    cells[2].innerHTML = `<input type="text" value="${category}" id="updCategory">`;
    cells[3].innerHTML = `<input type="number" value="${price}" id="updPrice">`;
    cells[4].innerHTML = `
        <select id="updSize">
            <option value="小" ${size === '小' ? 'selected' : ''}>小</option>
            <option value="中" ${size === '中' ? 'selected' : ''}>中</option>
            <option value="大" ${size === '大' ? 'selected' : ''}>大</option>
            <option value="特大" ${size === '特大' ? 'selected' : ''}>特大</option>
        </select>`;
    target.outerHTML = `<button class='btn btn-edit' id='save'>確定</button>`;

    document.getElementById('save').onclick = () => {
        const updatedData = {
            pId: id,
            pName: document.getElementById('updName').value,
            category: document.getElementById('updCategory').value,
            price: document.getElementById('updPrice').value,
            size: document.getElementById('updSize').value,
            sel_table: sel_table
        };

        axios.post('../server/index.php?action=DoUpdate', Qs.stringify(updatedData))
            .then(res => {
                const response = res.data;
                if (response.status == 200 || response.status == 204) {
                    cells[1].innerHTML = updatedData.pName;
                    cells[2].innerHTML = updatedData.category;
                    cells[3].innerHTML = updatedData.price;
                    cells[4].innerHTML = updatedData.size;
                    document.getElementById('save').outerHTML = `<button class='btn btn-edit' id='upd_product'>編輯</button>`;
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
}

export { DoUpdProduct };
