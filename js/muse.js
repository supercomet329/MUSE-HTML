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

/**
 * パスワードリセットページ
 */
// 入力項目のフォーカスが外れた際に処理を実行
$(function() {
    // メールアドレスのフォーカスが外れた際にcheckPwResetInput実行
    $('#pwResetEmail').on('blur', function() {
        checkPwResetInput();
    });
});

// 入力項目を確認し、パスワード再発行ボタンを有効化/無効化切り替え
function checkPwResetInput() {
    // パスワード再発行ボタン有効化フラグ
    var disabledFlag = true;

    // 入力項目フラグ定義
    var pwResetEmail = false;

    // メールアドレスの値取得
    var pwResetEmailVal = $('#pwResetEmail').val();

    // メールアドレスが入力されているかを確認
    if (pwResetEmailVal.length > 0) {
        // メールアドレスが入力されている場合、エラーメッセージを非表示
        $('#emailErrMsg').hide();
        // メールアドレスに空白文字が含まれていないかを確認
        if (!pwResetEmailVal.match(/[\x20\u3000]/)) {
            // メールアドレスのフォーマットを確認
            pwResetEmail = validateEmail(pwResetEmailVal);
        }
    } else {
        // メールアドレスが入力されていない場合、エラーメッセージを表示
        showTypeEmailMsg();
    }

    // 入力項目の値が正しい場合、パスワード再発行ボタンを有効化
    if (pwResetEmail === true) {
        disabledFlag = false;
    }
    $('#resetpw-btn').attr('disabled', disabledFlag);
}

// メールアドレスが入力されていない場合、メッセージを表示
function showTypeEmailMsg() {
    $('#inputEmailMsg').empty().append("<p id=\"emailErrMsg\">メールアドレスを入力してください</p>");
}