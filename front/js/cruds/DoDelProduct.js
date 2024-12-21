function DoDelProduct(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const firstCell = row.querySelector('td:first-child');
    const pId = firstCell.textContent; // 產品ID
    
    let data = {
        "pId": pId,
        "sel_table": sel_table
    }
    axios.post('../../server/index.php?action=DoDelete', Qs.stringify(data))
    .then(res => {
        const response = res['data'];
        document.getElementById('content').innerHTML = `<div class="message">編號${pId} ${response['message']}</div>`;
    })
    .catch(err => {
        console.error(err); 
    })
}

export { DoDelProduct };