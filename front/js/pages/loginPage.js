function loginPage() {
    const page = `
    <div class="container">
        <h2>登入</h2>
        <div id="msg"></div>
        <div class="form-group">
            <label for="username">帳號 Username:</label>
            <input type="text" id="mId" name="username" required>
            </div>
            <div class="form-group">
            <label for="password">密碼 Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button id="login">登入</button>
        <p>還沒註冊嗎？<a href="register.html">註冊</a></p> 
    `
    return page;
}

export { loginPage };