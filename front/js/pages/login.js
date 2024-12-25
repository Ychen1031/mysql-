import { loginPage } from "./loginPage.js";

window.onload = () => {
    document.getElementById('root').innerHTML = loginPage();

    document.getElementById('login').onclick = () => {
        const mId = document.getElementById('mId').value;
        const password = document.getElementById('password').value;

        // 確保 mId 和 password 都不為空
        if (mId === "" || password === "") {
            document.getElementById('msg').innerHTML = "請輸入會員ID和密碼。";
            return false; // 防止表單提交
        }

        let data = {
            "mId": mId,
            "password": password
        };

        // 禁用登入按鈕，防止多次提交
        const loginButton = document.getElementById('login');
        loginButton.disabled = true;

        // 向後端發送 POST 請求
        axios.post('../../server/index.php?action=login', Qs.stringify(data))
            .then(res => {
                const response = res['data'];

                // 根據後端返回的狀態來處理
                if (response.status === 200) {
                    if (response['message'] === 'admin') {
                        window.location.href = 'backstage.html';
                    } else { 
                        sessionStorage.setItem("mId", mId);
                        window.location.href = 'homepage.html';
                    }
                } else {
                    // 顯示錯誤訊息
                    document.getElementById('msg').innerHTML = response.message;
                }
            })
            .catch(err => {
                console.error(err);
                document.getElementById('msg').innerHTML = "登入過程中出現錯誤，請稍後再試。";
            })
            .finally(() => {
                // 無論成功或失敗，都重新啟用登入按鈕
                loginButton.disabled = false;
            });

        return false; // 防止表單提交
    };
};