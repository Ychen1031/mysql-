function DoAddOrder(sel_table) {
    const oId = document.getElementById('oId').value;
    let data = {
        "oId": oId,
        "mId": document.getElementById('mId').value,
        "quantity": document.getElementById('quantity').value,
        "orderTime": document.getElementById('orderTime').value,
        "sel_table": sel_table
    };
    
    axios.post('../../server/index.php?action=DoInsert', Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            document.getElementById('content').innerHTML = `<div class="message">訂單編號${oId} ${response['message']}</div>`;
        })
        .catch(err => {
            console.error(err);
        });
}

export { DoAddOrder };
