function DoDelMember(event, sel_table) {
    const target = event.target;
    const row = target.closest('tr');
    const firstCell = row.querySelector('td:first-child');
    const mId = firstCell.textContent; // 產品ID
    
    let data = {
        "mId": mId,
        "sel_table": sel_table
    }
    axios.post('../server/index.php?action=DoDelete', Qs.stringify(data))
    .then(res => {
        const response = res['data'];
        document.getElementById('content').innerHTML = `<div class="message">編號${mId} ${response['message']}</div>`;
    })
    .catch(err => {
        console.error(err); 
    })
}

export { DoDelMember };