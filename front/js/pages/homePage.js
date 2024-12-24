window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
        const mId = urlParams.get('mId');
        if (mId) {
            document.getElementById('root').innerText = `會員ID: ${mId}`;
        } else {
            document.getElementById('root').innerText = "會員ID 未提供";
        }
}