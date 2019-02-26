# 【 Discord Bot 】募集Bot


### 使い方
1. サーバーにbotを招待します。(https://discordapp.com/oauth2/authorize?client_id=549845655963697167&scope=bot&permissions=0)
2. コマンドを打つと、botがテンプレ募集文を出力します。

### コマンド

コマンド構成
```
/bosyu {募集タイトル}!{開催時}@{人数}
```
開催時,人数は省略可。
'@'の後ろに付けたテキストが「人数」
'!'の後ろに付けたテキストが「開催時」
残りが「募集タイトル」になります。

例
```
/bosyu ヒヒの落ちるアルバハ!23時@6
```

### 開発者用
1. リポジトリclone
2. Install：`> npm install`
3. DiscordDevでアプリ登録してbot作ってアクセストークンを取ってくる。
4. `.env.sample`にアクセストークンを記述。`.env`にリネーム
5. `> npm start` でforeverを利用して常駐起動
