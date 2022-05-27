// 通常新規登録ページ(sign_up.html)
// 入力項目のフォーカスが外れた際に処理を実行
$(function() {
    // メールアドレスのフォーカスが外れた際にcheckInput実行
    $('#email').on('blur', function() {
        checkInput();
    });
    // 会員規約がクリックされた際にcheckInput実行
    $('#terms').on('click', function() {
        checkInput();
    })
    // 仮登録ボタンを押された際に、メール送信済みメッセージを表示
    $('#register-btn').on('click', function() {
        showEmailSentMsg();
    })
});

// 入力項目を確認し、仮登録ボタン有効化/無効化切り替え
function checkInput() {
    // メールアドレスが入力された場合、emailCheckにtrueを格納
    var emailCheck = '';
    if (document.getElementById('email').value.length > 0) {
        emailCheck = true;
    } else {
        emailCheck = false;
    }

    // 会員規約のチェックボックス要素を取得
    var terms = document.getElementById('terms');

    // メールアドレスが入力されている、かつ会員規約にチェックがついている場合ボタンを有効化
    var registerBtn = document.getElementById('register-btn');
    if (emailCheck === true && terms.checked === true) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

// メール送信済みメッセージを表示
function showEmailSentMsg() {
    $('#emailSentMsg').append("<p>下記のメールアドレスに仮登録メールを送信いたしました。</p>");
}
/**
 * 本登録ページ(register.html)
 */
// 入力項目のフォーカスが外れた際に処理を実行
$(function() {
    // ユーザーネームのフォーカスが外れた際にcheckRegisterInput実行
    $('#username').on('blur', function() {
        checkRegisterInput();
    });
    // 名前のフォーカスが外れた際にcheckRegisterInput実行
    $('#name').on('blur', function() {
        checkRegisterInput();
    });
    // パスワードのフォーカスが外れた際にcheckRegisterInput実行
    $('#password').on('blur', function() {
        checkRegisterInput();
    });
    // パスワードを再入力のフォーカスが外れた際にcheckRegisterInput実行
    $('#password_confirmation').on('blur', function() {
        checkRegisterInput();
    });
});

// 入力項目を確認し、新規登録ボタン有効化/無効化切り替え
function checkRegisterInput() {
    // 新規登録ボタン有効化フラグ
    var disabledFlag = true;

    // 入力項目フラグ定義
    var username = false;
    var name = false;
    var password = false;
    var pwConfirm = false;

    // ユーザーネームの値取得
    var usernameVal = $('#username').val();
    // 名前の値取得
    var nameVal = $('#name').val();
    // パスワードの値取得
    var passwordVal = $('#password').val();
    // パスワードを再入力の値取得
    var pwConfirmVal = $('#password_confirmation').val();

    // ユーザーネームが入力されているかを確認
    if (usernameVal.length > 0) {
        // ユーザーネームに空白文字が含まれていないかを確認
        if (!usernameVal.match(/[\x20\u3000]/)) {
            username = true;
        }
    }

    // 名前が入力されているかを確認
    if (nameVal.length > 0) {
        // 名前に空白文字が含まれていないかを確認
        if (!nameVal.match(/[\x20\u3000]/)) {
            name = true;
        }
    }

    // パスワードが入力されているかを確認
    if (passwordVal.length > 0) {
        // パスワードのフォーマットを確認
        var password = validatePassword(passwordVal);
    }

    // パスワードを再入力が入力されているかを確認
    if (pwConfirmVal.length > 0) {
        // パスワードとパスワードを再入力の値が同じかを確認
        if (passwordVal === pwConfirmVal) {
            pwConfirm = true;
        }
    }

    // 入力項目の値が正しい場合、新規登録ボタンを有効化
    if (username === true && name === true && password === true && pwConfirm === true) {
        disabledFlag = false;
    }
    $('#register-btn').attr('disabled', disabledFlag);

}
