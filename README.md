# WebStorageの理解

Web Storage には、以下の 2 種類の仕組みがある:

* `sessionStorage` は、ページのセッション中 (ページの再読み込みや復元を含む、ブラウザーを開いている間) に使用可能な、オリジンごとに区切られた保存領域を管理する。
    * セッションデータのみを保存します。つまり、データはブラウザ（またはタブ）が閉じられるまで保存される。
    * データがサーバに転送されることはありません。
    * ストレージの制限がクッキーよりも大きいです（最大 5MB ）。
* `localStorage` も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続する。
    * 有効期限なしでデータを保存し、 JavaScript を介してクリアされます。もしくは、手動でクリアされる。
    * ストレージ容量はlocalStorage、sessionStorage、Cookie3つの中で最大です。

## 実装
```
localStorage.setItem(Key, Value)
localStorage.getItem(Key)

sessionStorage.setItem(Key, Value)
sessionStorage.getItem(Key)

```

# Cookieの理解

* `cookie`: cookieの有効期間は、ウィンドウまたはタブが閉じている場合でも、設定されたcookieの有効期限までのみ有効です。保存されるデータのサイズは約4Kで、数の制限があり（ブラウザごとに異なります）、通常は20以下です。欠点は、ビッグデータを保存できず、読みにくいことです。

## 実装
```
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/"
    console.log(d)
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1);
        if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
```


## WebStorageとCookieの活用
### localStoragese
* 一般的に長期ログイン（+ユーザーがログインしたかどうかを判断するため）に使用され、ローカルデータの長期保存に適している。
### sessionStorage
* 機密性の高いアカウントの1回限りのログイン。
### cookie：
* ユーザーがWebサイトにログインしたかどうかを判断して、次のログインが自動的にログインできるようにする。Cookieを削除した場合、ログインしたい際にログイン関連の情報を再入力する必要がある。
* 最終ログイン時刻などの情報を保存する。
* 動作を保存する。


