# 【 Discord Bot 】グラブル募集テンプレbot

## bot招待URL
https://discordapp.com/oauth2/authorize?client_id=549845655963697167&scope=bot&permissions=0
<br>
Heroku無料プランで運用してます。<br>
無料プラン超過したら僕のbotURLは公開控えます。<br>
ソースコードは公開しとくのでご自由にどうぞ。<br>

### 使い方
- 1. サーバーにbotを招待します。
- 2. 誰かがコマンドを打つと、botがテンプレ募集文を発言します。

### コマンド

構成<br>
```
/rr {募集タイトル}!{開催時}@{人数}
```
<br>
開催時,人数は省略可。<br>
'@'の後ろに付けたテキストが「人数」<br>
'!'の後ろに付けたテキストが「開催時」<br>
残りが「募集タイトル」になります。<br>

例<br>
```
/rr ヒヒの落ちるアルバハ!23時@6
```

----------

### 開発者用

- 1. リポジトリclone
- 2. Install：`> npm install`
- 3. DiscordDevでアプリ登録してbot作ってアクセストークンを取ってくる。
- 4. `.env.sample`にアクセストークンを記述。`.env`にリネーム
- 5. `> npm start` でforeverを利用して常駐起動
