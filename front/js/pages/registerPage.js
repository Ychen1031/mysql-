function registerPage() {
    const page = `
    <div class="container">
        <h2>註冊</h2>
        <div id='msg'></div>
        ID：<input type="text" id="mId" placeholder="Username">
        姓名：<input type="text" id="name" placeholder="Name">
        電話：<input type="text" id="phone" placeholder="Phone">
        email：<input type="email" id="email" placeholder="Email" required>
        密碼：<input type="password" id="password" placeholder="Password">
        <button id='register'>註冊</button>
        <p>已經註冊了? <a href="login.html">登入</a></p>
    </div>
    `;
    return page;
}

export { registerPage };