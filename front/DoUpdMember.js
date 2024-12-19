function DoUpdMember(event) {
    const target = event.target;
    const row = target.closest('tr');
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent);
    const [id, name, phone, email, password] = rowData.slice(0, 5);

    cells[1].innerHTML = `<input type="text" value="${name}" id="updName">`;
    cells[2].innerHTML = `<input type="text" value="${phone}" id="updPhone">`;
    cells[3].innerHTML = `<input type="email" value="${email}" id="updEmail">`;
    cells[4].innerHTML = `<input type="password" value="${password}" id="updPassword">`;
    target.outerHTML = `<button class='btn btn-edit' id='save'>確定</button>`;

    document.getElementById('save').onclick = () => {
        const updatedData = {
            mId: id,
            name: document.getElementById('updName').value,
            phone: document.getElementById('updPhone').value,
            email: document.getElementById('updEmail').value,
            password: document.getElementById('updPassword').value
        };

        axios.post('../server/index.php?action=member_DoUpdate', Qs.stringify(updatedData))
            .then(res => {
                const response = res.data;
                if (response.status == 200 || response.status == 204) {
                    cells[1].innerHTML = updatedData.name;
                    cells[2].innerHTML = updatedData.phone;
                    cells[3].innerHTML = updatedData.email;
                    cells[4].innerHTML = updatedData.password;
                    document.getElementById('save').outerHTML = `<button class='btn btn-edit' id='upd_member'>編輯</button>`;
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
}

export { DoUpdMember };
