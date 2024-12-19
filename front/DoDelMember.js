function DoDelMember(event) {
    const target = event.target;
    const row = target.closest('tr');
    const firstCell = row.querySelector('td:first-child');
    const id = firstCell.textContent; // 產品ID
    
    let data = {
        "id": id
    }
    axios.post('../server/index.php?action=member_DoDelete', Qs.stringify(data))
    .then(res => {
        const response = res['data'];
        document.getElementById('content').innerHTML = `<div class="message">編號${id} ${response['message']}</div>`;
    })
    .catch(err => {
        console.error(err); 
    })
}

export { DoDelMember };