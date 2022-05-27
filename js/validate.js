
function validateEmail(emailVal) {
    // メールアドレス形式の場合trueを返す
    return /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(emailVal);
}