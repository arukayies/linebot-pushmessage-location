const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTで位置情報メッセージを送るサンプル
function pushmessage_location() {
  //位置情報メッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
        'type': 'location',
        'title': 'my location',//タイトル
        'address': '〒150-0002 東京都渋谷区渋谷２丁目２１−１',//住所
        'latitude': 35.65910807942215,//緯度
        'longitude': 139.70372892916203//経度
      }],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}