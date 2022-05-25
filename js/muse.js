// 通常新規登録ページ(sign_up.html)
var checkInput = function() {
    // メールアドレスが入力された場合、emailCheckにtrueを格納
    var email = document.getElementById('email');
    email.addEventListener('change', checkInput);

    var emailCheck = '';
    if (document.getElementById('email').value.length > 0) {
        emailCheck = true;
    } else {
        emailCheck = false;
    }

    // 会員規約のチェックボックス要素を取得
    var terms = document.getElementById('terms');
    terms.addEventListener('change', checkInput);

    // メールアドレスが入力されている、かつ会員規約にチェックがついている場合ボタンを有効化
    var registerBtn = document.getElementById('register-btn');
    if (emailCheck === true && terms.checked === true) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}