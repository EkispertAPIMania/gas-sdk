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

## ライセンス

MITライセンスです。
