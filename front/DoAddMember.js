// 做新增產品到後端

function DoAddMember() {
    const mId = document.getElementById('mId').value;
    let data = {
        "mId": mId,
        "name": document.getElementById('name').value,
        "phone": document.getElementById('phone').value,
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value
    };

    axios.post('../server/index.php?action=member_DoInsert', Qs.stringify(data))
        .then(res => {
            const response = res['data'];
            document.getElementById('content').innerHTML = `<div class="message">編號${mId} ${response['message']}</div>`;
        })
        .catch(err => {
            console.error(err);
        });
}


export { DoAddMember };