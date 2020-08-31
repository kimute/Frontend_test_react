## フロントエンド課題

・以下の RESTful API からデータを習得する
　 a. https://coding-assignment-v1.now.sh/api/v1/inbox/{id}​
　 b. https://coding-assignment-v1.now.sh/api/v1/inbox/123456　　
・API から習得してデータを画面に表示する

- 受信箱のエイリアスと受信箱の ID

- 各メッセージには以下の内容を表示:
  - メッセージ送信者
  - メッセージ送信時間
  - メッセージのタイトル
  - メッセージの優先度(緊急、高、中、低)

### 使用ツール

React ライブラリー(16.13.1)
Defendencies
-axios:api を read
-jwt-decode:ペイロードを decode
-dateformat:日付形式を変換
-gh-pages
