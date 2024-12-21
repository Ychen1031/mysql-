// 做新增會員

function DoAddMember(sel_table) {
    const mId = document.getElementById('mId').value;
    let data = {
        "mId": mId,
        "name": document.getElementById('name').value,
        "phone": document.getElementById('phone').value,
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value,
        'sel_table': sel_table
    };
   
    axios.post('../server/index.php?action=DoInsert', Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            document.getElementById('content').innerHTML = `<div class="message">編號${mId} ${response['message']}</div>`;
        })
        .catch(err => {
            console.error(err);
        });
}

export { DoAddMember };