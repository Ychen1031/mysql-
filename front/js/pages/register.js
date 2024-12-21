import { registerPage } from "./registerPage.js"

window.onload = () => {
    document.getElementById('root').innerHTML = registerPage();

    document.getElementById('register').onclick = () => {
        const mId = document.getElementById('mId').value
        const data = {
            mId: mId,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            sel_table: "member"
        };

        axios.post('../../server/index.php?action=DoInsert', Qs.stringify(data))
        .then(res => {
            const response = res['data']
            console.log(response['message']);
            document.getElementById('msg').innerHTML = `<div class="message">編號${mId} ${response['message']}</div>`; 
            document.querySelectorAll('#mId, #name, #phone, #email, #password').forEach(input => input.value = '');
        })
        .catch(err => {
            console.error(err); 
        })
    }
}