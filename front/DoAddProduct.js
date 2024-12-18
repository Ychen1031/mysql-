// 做新增產品到後端

function DoAddProduct() {
    const pId = document.getElementById('pId').value;
    let data = {
        "pId": pId,
        "pName": document.getElementById('pName').value,
        "category": document.getElementById('category').value,
        'price': document.getElementById('price').value,
        'size': document.getElementById('size').value
    };

    axios.post('../server/index.php?action=product_DoInsert', Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            document.getElementById('content').innerHTML = `<div class="message">編號${pId} ${response['message']}</div>`;
        })
        .catch(err => {
            console.error(err);
        });
}


export { DoAddProduct };