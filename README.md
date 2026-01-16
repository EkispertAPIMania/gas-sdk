# 駅すぱあと API SDK for Google App Script

[駅すぱあと API](https://docs.ekispert.com/v1/index.html)をGoogle App Scriptから利用するためのSDKです。

## インストール

Google App Scriptで、ライブラリIDを指定します。

```
1lJW_-jvxWQbOHq-TUe1Dab3picc8nx5gZHb8vvxSqe43HkP9hNMjF-d8
```

## 初期化

初期化時には、駅すぱあと APIのAPIキーを指定します。[APIキーはトライアル申し込みより取得](https://api-info.ekispert.com/form/trial/)してください。

```js
const client = new Ekispert.Client('YOUR_API_KEY');
```

## 経路探索

経路探索APIを実行します。検索条件、結果は[経路探索 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/search/course/extreme.html)を参照してください。

```js
const query = client.courseExtremeQuery()
query.viaList = "23368:22741:22513".split(':');
query.searchType = 'plain';
query.fixedRailList = ['', 'ＪＲ埼京線'];
query.answerCount = 1;

const courses = query.execute();
console.log(courses.length === 1);
console.log(courses[0].serializeData !== undefined);
console.log(courses[0].routes[0].lines[0].name);
console.log(courses[0].passStatuses.length);
console.log(courses[0].prices[0].kind); // Fare
console.log(courses[0].routes[0].distance); // 324
console.log(courses[0].routes[0].exhaustCo2); // 550
```

## 駅情報検索

駅情報検索APIを実行します。検索条件、結果は[駅情報 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/station.html)を参照してください。

```js
const query = client.stationQuery();
query.name = '東京';
query.prefectureCodes = [13];
query.railName = 'ＪＲ中央線快速'
const { points, max, offset, roundTripType } = query.execute();
points.forEach(point => console.log(point.station.name));
```

## 駅簡易情報検索

駅簡易情報検索APIを実行します。検索条件、結果は[駅簡易情報 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/station/light.html)を参照してください。

```js
const query = client.stationLightQuery();
query.name = '東京'
query.prefectureCodes = [13, 14]
query.types = ['bus']
query.communityBus = 'except'
const points = query.execute();
points.forEach(point => console.log(point.station.name));
```

## 平均待ち時間探索

平均待ち時間探索のみの経路探索を行います。検索条件、結果は[平均待ち時間探索 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/search/course/plain.html)を参照してください。

```js
const query = client.coursePlainQuery();
query.from = 25077
query.to = 29090
const courses = query.execute();
console.log(courses[0].searchType); // "plain"
console.log(courses[0].prices[0].kind); // "ChargeSummary"
console.log(courses[0].prices[0].oneway); // 2530
console.log(courses[0].prices[0].round); // 5060
console.log(courses[0].teiki.displayRoute); // "名古屋--ＪＲ東海道新幹線--新大阪--OsakaMetro御堂筋線--なんば(地下鉄)"
console.log(courses[0].routes[0].timeOther); // 17
console.log(courses[0].routes[0].exhaustCo2); // 3884
console.log(courses[0].routes[0].points[0].station.name); // "名古屋"
console.log(courses[0].routes[0].points[1].station.name); // "新大阪"
```

## 緯度経度からの周辺駅検索

緯度経度からの周辺駅検索を実行します。検索条件、結果は[緯度経度からの周辺駅検索 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/geo/station.html)を参照してください。

```javascript
const query = client.geoStationQuery();

// 緯度経度の設定
query.setGeoPoint({ latitude: "35.6783055555556", longitude: "139.770441666667", radius: 1000, gcs: 'tokyo'})
// コミュニティバスの指定
query.communityBus = 'except';
try {
  const points = query.execute();
  console.log(points.length); // 79
  console.log(points[0].station.name); // 東京
  console.log(points[0].prefecture.name); // 東京都
  console.log(points[0].prefecture.code); // 13
  console.log(points[0].distance); // 24
  console.log(points[1].station.name); // 東京駅前(高速・連絡バス)
} catch (e) {
  console.error(e.code);
  console.error(e.message);
}
```

## 定期券の払い戻し計算

定期券の払い戻し計算を行います。検索条件、結果は[定期券の払い戻し計算 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/course/repayment.html)を参照してください。

```javascript
const query = client.coursePlainQuery();
query.from = '高円寺';
query.to = '東京';
query.date = new Date();
const results = query.execute();

const query2 = client.courseRepaymentQuery();
query2.checkEngineVersion = false;
query2.serializeData = results[0].serializeData;
query2.separator = ['1', 'true'];
const results2 = query2.execute();

console.log(results2.repaymentList.repaymentTickets.length); // 1
console.log(results2.repaymentList.startDate); // Thu Jan 15 2026 09:00:00 GMT+0900 (Japan Standard Time)
console.log(results2.repaymentList.validityPeriod); // 6
console.log(results2.repaymentList.repaymentTickets[0].feePriceValue); // 220
console.log(results2.teikiRoute.teikiRouteSections[0].points[0].prefecture.name); // 東京都
console.log(results2.teikiRoute.teikiRouteSections[0].points[0].station.name); // 高円寺
```

## N分以内で行ける駅を検索

N分以内で行ける駅を検索します。検索条件、結果は[範囲探索 \- 駅すぱあと API（旧：駅すぱあとWebサービス） Documents 駅データ・経路検索のWebAPI](https://docs.ekispert.com/v1/api/search/multipleRange.html)を参照してください。

```javascript
const query = client.multipleRangeQuery();

// 探索条件の設定
query.baseList = ["有楽町"];
query.upperMinute = [15];

const response = query.execute();
console.log(response.points.length); // 42
console.log(response.points[0].station.name); // 日比谷
console.log(response.points[0].prefecture.name); // 東京都
console.log(response.points[0].prefecture.code); // 13
```


## ライセンス

MITライセンスです。
