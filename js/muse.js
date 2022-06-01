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

/**
 * ログインページ(login.html)
 */
// 入力項目のフォーカスが外れた際に処理を実行
$(function() {
    // メールアドレスのフォーカスが外れた際にcheckLoginInput実行
    $('#loginEmail').on('blur', function() {
        checkLoginInput();
    });
    // パスワードのフォーカスが外れた際にcheckLoginInput実行
    $('#loginPassword').on('blur', function() {
        checkLoginInput();
    })
});

// 入力項目を確認し、ログインボタン有効化/無効化切り替え
function checkLoginInput() {
    // ログインボタン有効化フラグ
    var disabledFlag = true;

    // 入力項目フラグ定義
    var loginEmail = false;
    var loginPassword = false;

    // メールアドレスの値取得
    var emailVal = $('#loginEmail').val();
    // パスワードの値取得
    var passwordVal = $('#loginPassword').val();

    // メールアドレスが入力されているかを確認
    if (emailVal.length > 0) {
        // メールアドレスに空白文字が含まれていないかを確認
        if (!emailVal.match(/[\x20\u3000]/)) {
            // メールアドレスのフォーマットを確認
            loginEmail = validateEmail(emailVal);
        }
    }
    // パスワードが入力されているかを確認
    if (passwordVal.length > 0) {
        // パスワードに空白文字が含まれていないかを確認
        if (!passwordVal.match(/[\x20\u3000/]/)) {
            // パスワードのフォーマットを確認
            loginPassword = validatePassword(passwordVal);
        }
    }

    // 入力項目の値が正しい場合、ログインボタンを有効化
    if (loginEmail === true && loginPassword === true) {
        disabledFlag = false;
    }
    $('#login-btn').attr('disabled', disabledFlag);
}

// 画像サイズの検証
function validateImageSize(file, fileInput) {
    const sizeLimit = 1024 * 1024 * 100;
    if (file.size > sizeLimit) {
        alert('ファイルのサイズは100MB以下にしてください');
        fileInput.value = '';
        exit();
    }
}

// 選択した画像に置き換える
function replaceImage(file, image) {
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function() {
        image.setAttribute('src', fr.result);
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
    var usernameFlag = false;
    var nameFlg = false;
    var passwordFlg = false;
    var pwConfirmFlg = false;

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
            usernameFlag = true;
        }
    }

    // 名前が入力されているかを確認
    if (nameVal.length > 0) {
        // 名前に空白文字が含まれていないかを確認
        if (!nameVal.match(/[\x20\u3000]/)) {
            nameFlg = true;
        }
    }

    // パスワードが入力されているかを確認
    if (passwordVal.length > 0) {
        // パスワードが入力されている場合、エラーメッセージを非表示
        $('#inputPwErrMsg').hide();
        // パスワードに空白文字が含まれていないかを確認
        if (!passwordVal.match(/[\x20\u3000]/)) {
            // パスワードのフォーマットを確認
            var passwordFlg = validatePassword(passwordVal);
            if (passwordFlg === false) {
                // パスワードのフォーマットが正しくない場合、エラーメッセージを表示
                showPwValidateMsg();
            }
        } else {
            showPwValidateMsg2();
        }
    }

    // パスワードを再入力が入力されているかを確認
    if (pwConfirmVal.length > 0) {
        // パスワードを再入力が入力されている場合、エラーメッセージを非表示
        $('#inputPwConfirmErrMsg').hide();
        // パスワードとパスワードを再入力の値が同じかを確認
        if (passwordVal === pwConfirmVal) {
            pwConfirmFlg = true;
        } else {
            // パスワードが合っていない場合、エラーメッセージを表示
            showPwNotMatchMsg();
        }
    }

    // 入力項目の値が正しい場合、新規登録ボタンを有効化
    if (usernameFlag === true && nameFlg === true && passwordFlg === true && pwConfirmFlg === true) {
        disabledFlag = false;
    }
    $('#register-btn').attr('disabled', disabledFlag);
}

/**
 * パスワードリセットページ(pass_reset.html)
 */
// 入力項目のフォーカスが外れた際に処理を実行
$(function() {
    // パスワードのフォーカスが外れた際にcheckSetPwInput実行
    $('#newPw').on('blur', function() {
        checkSetPwInput();
        showTypePwMsg();
    });
    // 新しいパスワードを再入力のフォーカスが外れた際にcheckSetPwInput実行
    $('#newPwConfirm').on('blur', function() {
        checkSetPwInput();
        showTypePwConfirmMsg();
    });
});

// 入力項目を確認し、新規登録ボタン有効化/無効化切り替え
function checkSetPwInput() {
    // 新規登録ボタン有効化フラグ
    var disabledFlag = true;

    // 入力項目フラグ定義
    var flagNewPw = false;
    var flagNewPwConfirm = false;

    // パスワードの値取得
    var newPwVal = $('#newPw').val();
    // パスワードを再入力の値取得
    var newPwConfirmVal = $('#newPwConfirm').val();

    // パスワードが入力されているかを確認
    if (newPwVal.length > 0) {
        // パスワードが入力されている場合、エラーメッセージを非表示
        $('#inputPwErrMsg').hide();
        // パスワードに空白文字が含まれていないかを確認
        if (!newPwVal.match(/[\x20\u3000]/)) {
            // パスワードのフォーマットを確認
            var flagNewPw = validatePassword(newPwVal);
            if (flagNewPw === false) {
                // パスワードのフォーマットが正しくない場合、エラーメッセージを表示
                showPwValidateMsg();
            }
        }
    }

    // パスワードを再入力が入力されているかを確認
    if (newPwConfirmVal.length > 0) {
        // パスワードを再入力が入力されている場合、エラーメッセージを非表示
        $('#inputPwConfirmErrMsg').hide();
        // パスワードとパスワードを再入力の値が同じかを確認
        if (newPwVal === newPwConfirmVal) {
            flagNewPwConfirm = true;
        } else {
            // パスワードが合っていない場合、エラーメッセージを表示
            showPwNotMatchMsg();
        }
    }

    // 入力項目の値が正しい場合、新規登録ボタンを有効化
    if (flagNewPw === true && flagNewPwConfirm === true) {
        disabledFlag = false;
    }
    $('#setpw-btn').attr('disabled', disabledFlag);
}

// パスワードが入力されていない場合、メッセージを表示
function showTypePwMsg() {
    // パスワードの値取得
    var newPwLength = $('#newPw').val().length;
    if (newPwLength <= 0) {
        $('#inputPwMsg').empty().append("<p id=\"inputPwErrMsg\" class=\"pwResetErrMsg\">パスワードを入力してください</p>");
    }
}

// パスワードを再入力が入力されていない場合、メッセージを表示
function showTypePwConfirmMsg() {
    // パスワードを再入力の値取得
    var newPwConfirmLength = $('#newPwConfirm').val().length;
    if (newPwConfirmLength <= 0) {
        $('#inputPwConfirmMsg').empty().append("<p id=\"inputPwConfirmErrMsg\" class=\"pwResetErrMsg\">パスワードを入力してください</p>");
    }
}

// パスワードのフォーマットが正しくない場合、メッセージを表示
function showPwValidateMsg() {
    $('#inputPwMsg').empty().append("<p id=\"inputPwErrMsg\" class=\"pwResetErrMsg\">パスワードは半角英小文字、大文字、数字を含む9文字以上32文字以内を入力してください</p>");
}

// パスワードに空欄がある場合、メッセージを表示
function showPwValidateMsg2() {
    $('#inputPwMsg').empty().append("<p id=\"inputPwErrMsg\" class=\"pwResetErrMsg\">パスワードにスペースは含めないでください</p>");
}

// パスワードが合っていない場合、メッセージを表示
function showPwNotMatchMsg() {
    $('#inputPwConfirmMsg').empty().append("<p id=\"inputPwConfirmErrMsg\" class=\"pwResetErrMsg\">パスワードが一致しません</p>");
}

// 検索オプションのモーダル開閉
$(function(){
	var open = $('.modal-open'),
		container = $('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// タブの選択機能（post_search.html）
$(function() {
    $('#desc').click(function() {
    $('#desc').addClass('selected-tab');
    $('#desc').removeClass('not-selected-tab');
    $('#asc').addClass('not-selected-tab');
    });
    $('#asc').click(function() {
    $('#asc').addClass('selected-tab');
    $('#asc').removeClass('not-selected-tab');
    $('#desc').addClass('not-selected-tab');
    });
});

// 画像変更（profile_edit.html）
$(function() {
    $('#cover_img_file_input').change(function() {
      let file = this.files[0];
      let fileInput = $('#cover_img_file_input').get(0);
      let image = $('#cover_image').get(0);
      validateImageSize(file, fileInput)
      replaceImage(file, image);
    });

    $('#profile_img_file_input').change(function() {
      let file = this.files[0];
      let fileInput = $('#profile_img_file_input').get(0);
      let image = $('#profile_image').get(0);
      validateImageSize(file, fileInput)
      replaceImage(file, image);
    });
  });

// 名前・ユーザーネーム入力確認（profile_edit.html）
$(function() {
    // 名前のフォーカスが外れた際にcheck_ProfileInput実行
    $('#name_box').on('blur', function() {
        check_ProfileInput();
    });
    // ユーザーネームのフォーカスが外れた際にcheck_ProfileInput実行
    $('#user_name_box').on('blur', function() {
        check_ProfileInput();
    })
    // 生年月日のフォーカスが外れた際にcheck_ProfileInput実行
    $('#calendar_box').on('blur', function() {
        check_ProfileInput();
    });
    // webサイトのフォーカスが外れた際にcheck_ProfileInput実行
    $('#url_box').on('blur', function() {
        check_ProfileInput();
    });

});

// 名前・ユーザーネーム入力判定
function check_ProfileInput(){
    $('#NameMsg').hide();
    $('#UserNameMsg').hide();
    $('#CalendarMsg').hide();
    $('#UrlMsg').hide();
    // 保存ボタン有効化フラグ
    var disabledFlag = true;

    // 入力項目フラグ定義
    var name_flg = false;
    var user_name_flg = false;
    var calendar_flg = false;
    var url_flg = false;

    // 名前の値取得
    var nameVal = $('#name_box').val();
    // ユーザーネームの値取得
    var user_nameVal = $('#user_name_box').val();
    // URLの値取得
    var urlVal = $('#url_box').val();
    var calendarVal = $('#calendar_box').val();

    // 名前が入力されているかを確認
    if (nameVal.length > 0) {
        if (!nameVal.match(/^\s+?$/ || /^　+?$/)) {
            name_flg = true;
        } else {
            showNameMsg();
        }
    } else {
        showNameMsg();
    }

    // ユーザーネームが入力されているかを確認
    if (user_nameVal.length > 0) {
        if (!user_nameVal.match(/^\s+?$/ || /^　+?$/)) {
            user_name_flg = true;
        } else {
            showNameMsg();
        }
    } else {
        showUserNameMsg(); 
    }

    // 生年月日が入力されているかを確認
    if (calendarVal.length > 0) {
        // 生年月日の形式を確認
        if(!calendarVal.match(/^\d{4}\-\d{2}\-\d{2}$/)){
            // 形式が間違っている場合エラーメッセージ表示
            showCalendarMsg();
        } else {
            calendar_flg = true;
        };
    } else {
        calendar_flg = true;
    };
        

    // URLが入力されているかを確認
    if (urlVal.length > 0) {
        // URLの空白を確認
        if (!urlVal.match(/[\x20\u3000]/)) {
            // URLのフォーマットを確認
            url_flg = validateUrl(urlVal);
            // URLが間違っている場合エラーメッセージ表示
            if (url_flg === false) {
                showUrlMsg()
            }; 
        // URLに空欄が入っている場合エラーメッセージ表示
        } else {
            showUrlMsg()
        };
    } else {
        url_flg = true;
    }

    // 正しく入力されている場合、保存ボタンを有効化
    if (name_flg === true && user_name_flg === true && calendar_flg == true && url_flg === true) {
        disabledFlag = false;
    }

    // ボタンの「disabled」の置き換え
    $('#save-btn').attr('disabled', disabledFlag);
}

function showNameMsg() {
    // 名前空欄のメッセージ
    $('#NameMsg').show();
    $('#NameMsg').empty().append("<p id=\"inputNameErrMsg\" class=\"NameErrMsg mb-0\">名前を入力してください</p>");
    
}

function showUserNameMsg() {
    // ユーザーネーム空欄のメッセージ
    $('#UserNameMsg').show();
    $('#UserNameMsg').empty().append("<p id=\"inputUserNameErrMsg\" class=\"UserNameErrMsg mb-0\">ユーザーネームを入力してください</p>");
    
}

function showCalendarMsg() {
    // 日付間違っている場合のメッセージ
    $('#CalendarMsg').show();
    $('#CalendarMsg').empty().append("<p id=\"inputCalendarErrMsg\" class=\"CalendarErrMsg mb-0\">生年月日を正しく選択してください</p>");
    
}

function showUrlMsg() {
    // URL間違っている場合のメッセージ
    $('#UrlMsg').show();
    $('#UrlMsg').empty().append("<p id=\"inputUrlErrMsg\" class=\"UrlErrMsg mb-0\">URLを確認してください</p>");
    
}

