import { loginPage } from "./loginPage.js";

window.onload = () => {
    document.getElementById('root').innerHTML = loginPage();

    document.getElementById('login').onclick = () => {
        const mId = document.getElementById('mId').value;
        const password = document.getElementById('password').value;

<<<<<<< HEAD
        // 確保 mId 和 password 都不為空
        if (mId === "" || password === "") {
            document.getElementById('msg').innerHTML = "請輸入會員ID和密碼。";
            return false; // 防止表單提交
        }

        let data = {
            "mId": mId,
            "password": password
        };

=======
        if (mId === 'admin' && password === '123') {
            window.location.href = 'backstage.html';
            
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
>>>>>>> 195131f3ac30d8fd29381957a6f1ed22843241e2
        // 禁用登入按鈕，防止多次提交
        const loginButton = document.getElementById('login');
        loginButton.disabled = true;

        // 向後端發送 POST 請求
        axios.post('../../server/index.php?action=login', Qs.stringify(data))
            .then(res => {
                const response = res['data'];

                // 根據後端返回的狀態來處理
                if (response.status === 200) {
<<<<<<< HEAD
                    // 登入成功，跳轉到 backstage.html
                    sessionStorage.setItem("mId", mId);
                    window.location.href = 'backstage.html';
=======
                    if (response['message'] == 'admin') {
                        window.location.href = 'backstage.html';
                    } else {
                        window.location.href = `homepage.html?mId=${mId}`;
                    }

>>>>>>> 195131f3ac30d8fd29381957a6f1ed22843241e2
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
