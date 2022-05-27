/**
 * パスワードのフォーマットを確認
 * @param {number=} passwordVal パスワード 
 * @returns {boolean} フォーマットが正しい場合はtrueを返す
 */
function validatePassword(passwordVal) {
    // 半角英小文字、大文字、数字を含む9文字以上32文字以内であればtrueを返す
    return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{9,32}$/.test(passwordVal);
}
