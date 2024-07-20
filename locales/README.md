## locales
ここのディレクトリに言語設定のデータを、<br>
それぞれの言語ごとにディレクトリを作って```.json```形式でおいていく<br>
形式としては、```/locales/言語/translation.json```<br>
言語を追加するときには、<br>
```translation.json```の内容を以下のようにする。
```
{
  "title": "Code Runner",
  "languageLabel": "プログラミング言語:",
  "sourceCodeLabel": "ソースコード:",
  "inputLabel": "標準入力:",
  "executeButton": "実行",
  "resultTitle": "結果",
  "stdoutLabel": "出力",
  "buildStderrLabel": "ビルドエラー",
  "stderrLabel": "エラー"
}
```
上記のJSONファイルの現在日本語の部分を、<br>
言語にあわせて変更していく。*注:```title```部分は変更しないこと。<br>
```index.html```内部の```<body>```タグ先頭、
```
    <div class="container">
        <h1 id="title">Code Runner</h1>
        <div class="form-group">
            <label for="language-select">Language:</label>
            <select id="language-select" onchange="changeLanguage()">
                <option value="en">English</option>
                <option value="ja">日本語</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
                <!-- 他の言語の追加 -->
            </select>
```
の、```<!-- 他の言語の追加 -->```部分に、```<option value="言語(locales内ディレクトリ名と同一)">言語名(その言語で)</option>```<br>
のように追記する。
