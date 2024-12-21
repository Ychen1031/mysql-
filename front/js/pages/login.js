import { loginPage } from "./loginPage.js";

window.onload = () => {
    document.getElementById('root').innerHTML = loginPage();

    document.getElementById('login').onclick = () => {
        const mId = document.getElementById('mId').value;
        const password = document.getElementById('password').value;

        if (mId === 'admin' && password === '123') {
            window.location.href = 'backstage.html';
            return false; // Prevent form submission
        } else {
            let data = {
                "mId": mId,
                "password": password
            };

            axios.post('../../server/index.php?action=login', Qs.stringify(data))
                .then(res => {
                    const response = res['data'];
                    document.getElementById('msg').innerHTML = response['message'];
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };
};
