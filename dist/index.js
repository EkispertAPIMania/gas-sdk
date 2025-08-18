"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/models/pass_status.ts
  var PassStatus = class {
    constructor(data) {
      __publicField(this, "teiki3Index");
      __publicField(this, "toLineIndex");
      __publicField(this, "teiki6Index");
      __publicField(this, "fromLineIndex");
      __publicField(this, "kind");
      __publicField(this, "selected");
      __publicField(this, "teiki1Index");
      __publicField(this, "name");
      __publicField(this, "type");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "teiki3index":
          this.teiki3Index = value;
          break;
        case "tolineindex":
          this.toLineIndex = value;
          break;
        case "teiki6index":
          this.teiki6Index = value;
          break;
        case "fromlineindex":
          this.fromLineIndex = value;
          break;
        case "kind":
          this.kind = value;
          break;
        case "selected":
          this.selected = value;
          break;
        case "teiki1index":
          this.teiki1Index = value;
          break;
        case "name":
          this.name = value;
          break;
        case "type":
          this.type = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in PassStatus`);
      }
    }
  };

  // src/models/price.ts
  var Price = class {
    constructor(data) {
      __publicField(this, "fareRevisionStatus");
      __publicField(this, "toLineIndex");
      __publicField(this, "fromLineIndex");
      __publicField(this, "kind");
      __publicField(this, "index");
      __publicField(this, "selected");
      __publicField(this, "type");
      __publicField(this, "oneway");
      __publicField(this, "revisionStatus");
      __publicField(this, "round");
      __publicField(this, "passClassIndex");
      __publicField(this, "name");
      __publicField(this, "vehicleIndex");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "farerevisionstatus":
          this.fareRevisionStatus = value;
          break;
        case "tolineindex":
          this.toLineIndex = value;
          break;
        case "fromlineindex":
          this.fromLineIndex = value;
          break;
        case "kind":
          this.kind = value;
          break;
        case "index":
          this.index = value;
          break;
        case "selected":
          this.selected = value;
          break;
        case "type":
          this.type = value;
          break;
        case "oneway":
          this.oneway = value;
          break;
        case "revisionstatus":
          this.revisionStatus = value;
          break;
        case "round":
          this.round = value;
          break;
        case "passclassindex":
          this.passClassIndex = value;
          break;
        case "name":
          this.name = value;
          break;
        case "vehicleindex":
          this.vehicleIndex = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Price`);
      }
    }
  };

  // src/models/line_symbol.ts
  var LineSymbol = class {
    constructor(data) {
      __publicField(this, "code");
      __publicField(this, "name");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "code":
          this.code = value;
          break;
        case "name":
          this.name = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in LineSymbol`);
      }
    }
  };

  // src/models/datetime.ts
  var Datetime = class {
    constructor(data) {
      __publicField(this, "text");
      __publicField(this, "operation");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "text":
          this.text = value;
          break;
        case "operation":
          this.operation = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Datetime`);
      }
    }
  };

  // src/models/state.ts
  var State = class {
    constructor(data) {
      __publicField(this, "type");
      __publicField(this, "datetime");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "type":
          this.type = value;
          break;
        case "datetime":
          this.datetime = new Datetime(value);
          break;
        default:
          throw new Error(`Unknown key: ${key} in State`);
      }
    }
  };

  // src/models/line.ts
  var Line = class {
    constructor(data) {
      __publicField(this, "direction");
      __publicField(this, "stopStationCount");
      __publicField(this, "teiki3Index");
      __publicField(this, "teiki12Index");
      __publicField(this, "teiki6Index");
      __publicField(this, "timeOnBoard");
      __publicField(this, "exhaustCO2");
      __publicField(this, "fareIndex");
      __publicField(this, "exhaustCO2atPassengerCar");
      __publicField(this, "distance");
      __publicField(this, "teiki1Index");
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "arrivalState");
      __publicField(this, "typicalName");
      __publicField(this, "timeReliability");
      __publicField(this, "departureState");
      __publicField(this, "lineSymbol");
      __publicField(this, "color");
      __publicField(this, "chargeIndex");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "direction":
          this.direction = value;
          break;
        case "stopstationcount":
          this.stopStationCount = value;
          break;
        case "teiki3index":
          this.teiki3Index = value;
          break;
        case "teiki12index":
          this.teiki12Index = value;
          break;
        case "teiki6index":
          this.teiki6Index = value;
          break;
        case "timeonboard":
          this.timeOnBoard = value;
          break;
        case "exhaustco2":
          this.exhaustCO2 = value;
          break;
        case "fareindex":
          this.fareIndex = value;
          break;
        case "exhaustco2atpassengercar":
          this.exhaustCO2atPassengerCar = value;
          break;
        case "distance":
          this.distance = value;
          break;
        case "teiki1index":
          this.teiki1Index = value;
          break;
        case "name":
          this.name = value;
          break;
        case "type":
          this.type = value;
          break;
        case "arrivalstate":
          this.arrivalState = new State(value);
          break;
        case "typicalname":
          this.typicalName = value;
          break;
        case "timereliability":
          this.timeReliability = value;
          break;
        case "departurestate":
          this.departureState = new State(value);
          break;
        case "linesymbol":
          this.lineSymbol = new LineSymbol(value);
          break;
        case "color":
          this.color = value;
          break;
        case "chargeindex":
          this.chargeIndex = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Line`);
      }
    }
  };

  // src/models/geo_point.ts
  var GeoPoint = class {
    constructor(data) {
      __publicField(this, "longi");
      __publicField(this, "lati");
      __publicField(this, "longi_d");
      __publicField(this, "gcs");
      __publicField(this, "lati_d");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "longi":
          this.longi = value;
          break;
        case "lati":
          this.lati = value;
          break;
        case "longi_d":
          this.longi_d = value;
          break;
        case "gcs":
          this.gcs = value;
          break;
        case "lati_d":
          this.lati_d = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in GeoPoint`);
      }
    }
  };

  // src/models/prefecture.ts
  var Prefecture = class {
    constructor(data) {
      __publicField(this, "code");
      __publicField(this, "name");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "code":
          this.code = value;
          break;
        case "name":
          this.name = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Prefecture`);
      }
    }
  };

  // src/models/station.ts
  var Station = class {
    constructor(data) {
      __publicField(this, "code");
      __publicField(this, "name");
      __publicField(this, "type");
      __publicField(this, "yomi");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "code":
          this.code = value;
          break;
        case "name":
          this.name = value;
          break;
        case "type":
          this.type = value;
          break;
        case "yomi":
          this.yomi = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Station`);
      }
    }
  };

  // src/models/point.ts
  var Point = class {
    constructor(data) {
      __publicField(this, "station");
      __publicField(this, "prefecture");
      __publicField(this, "geoPoint");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "station":
          this.station = new Station(value);
          break;
        case "prefecture":
          this.prefecture = new Prefecture(value);
          break;
        case "geopoint":
          this.geoPoint = new GeoPoint(value);
          break;
        default:
          throw new Error(`Unknown key: ${key} in Point`);
      }
    }
  };

  // src/models/route.ts
  var Route = class {
    constructor(data) {
      __publicField(this, "timeOther");
      __publicField(this, "timeOnBoard");
      __publicField(this, "exhaustCo2");
      __publicField(this, "exhaustCo2atPassengerCar");
      __publicField(this, "distance");
      __publicField(this, "timeWalk");
      __publicField(this, "transferCount");
      __publicField(this, "lines", []);
      __publicField(this, "points", []);
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "timeother":
          this.timeOther = value;
          break;
        case "timeonboard":
          this.timeOnBoard = value;
          break;
        case "exhaustco2":
          this.exhaustCo2 = value;
          break;
        case "exhaustco2atpassengercar":
          this.exhaustCo2atPassengerCar = value;
          break;
        case "distance":
          this.distance = value;
          break;
        case "timewalk":
          this.timeWalk = value;
          break;
        case "transfercount":
          this.transferCount = value;
          break;
        case "line":
          this.lines = (Array.isArray(value) ? value : [value]).map((item) => new Line(item));
          break;
        case "point":
          this.points = (Array.isArray(value) ? value : [value]).map((item) => new Point(item));
          break;
        default:
          throw new Error(`Unknown key: ${key} in Route`);
      }
    }
  };

  // src/models/teiki.ts
  var Teiki = class {
    constructor(data) {
      __publicField(this, "serializeData");
      __publicField(this, "detailRoute");
      __publicField(this, "displayRoute");
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      switch (key.toLocaleLowerCase()) {
        case "serializedata":
          this.serializeData = value;
          break;
        case "detailroute":
          this.detailRoute = value;
          break;
        case "displayroute":
          this.displayRoute = value;
          break;
        default:
          throw new Error(`Unknown key: ${key} in Teiki`);
      }
    }
  };

  // src/models/course.ts
  var Course = class {
    constructor(data) {
      __publicField(this, "searchType");
      __publicField(this, "dataType");
      __publicField(this, "serializeData");
      __publicField(this, "prices", []);
      __publicField(this, "teiki");
      __publicField(this, "routes", []);
      __publicField(this, "passStatuses", []);
      this.sets(data);
    }
    sets(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.set(key, value);
      });
    }
    set(key, value) {
      if (value === null || value === void 0) {
        return;
      }
      switch (key.toLocaleLowerCase()) {
        case "searchtype":
          this.searchType = value;
          break;
        case "datatype":
          this.dataType = value;
          break;
        case "serializedata":
          this.serializeData = value;
          break;
        case "price":
          this.prices = (Array.isArray(value) ? value : [value]).map((item) => new Price(item));
          break;
        case "teiki":
          this.teiki = new Teiki(value);
          break;
        case "route":
          this.routes = (Array.isArray(value) ? value : [value]).map((item) => new Route(item));
          break;
        case "passstatus":
          this.passStatuses = (Array.isArray(value) ? value : [value]).map((item) => new PassStatus(item));
          break;
        default:
          throw new Error(`Unknown key: ${key} in Course`);
      }
    }
  };

  // src/error.ts
  var EkispertError = class extends Error {
    constructor(code, messages) {
      var __super = (...args) => {
        super(...args);
        this.code = code;
        this.messages = messages;
        return this;
      };
      if (typeof messages === "string") {
        __super(messages);
      } else {
        __super(messages.map((m) => m.text).join(", "));
      }
      this.code = code;
      this.name = "EkispertError";
    }
  };

  // src/queries/base.ts
  var Base = class {
    constructor(client) {
      __publicField(this, "client");
      __publicField(this, "format");
      this.client = client;
      this.format = "json";
    }
    buildQuery(params) {
      const pairs = [];
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`);
        }
      }
      return pairs.join("&");
    }
    _execute(path, params) {
      params["key"] = this.client.apiKey;
      const url = `${this.client.baseUrl}/v1/json${path}?${this.buildQuery(params)}`;
      const res = UrlFetchApp.fetch(url, {
        method: "get",
        muteHttpExceptions: true,
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = JSON.parse(res.getContentText());
      if (json.ResultSet.Error) {
        throw new EkispertError(json.ResultSet.Error.code, json.ResultSet.Error.Message);
      }
      delete json.ResultSet.apiVersion;
      delete json.ResultSet.engineVersion;
      return json.ResultSet;
    }
  };

  // src/queries/course_extreme.ts
  var CourseExtreme = class extends Base {
    constructor(client) {
      super(client);
      __publicField(this, "viaList", []);
      __publicField(this, "excludeSameLineStation");
      __publicField(this, "fixedRailList", []);
      __publicField(this, "fixedRailDirectionList", []);
      __publicField(this, "date", /* @__PURE__ */ new Date());
      __publicField(this, "searchType", "departure");
      __publicField(this, "sort", "ekispert");
      __publicField(this, "answerCount", 5);
      __publicField(this, "searchCount", 5);
      __publicField(this, "conditionDetails", []);
      __publicField(this, "corporationBinds", []);
      __publicField(this, "interruptCorporationList", []);
      __publicField(this, "interruptRailList", []);
      __publicField(this, "interruptOperationLineCodeList", []);
      __publicField(this, "interruptTransferStationCodeList", []);
      __publicField(this, "resultDetail");
      __publicField(this, "addOperationLinePattern");
      __publicField(this, "checkEngineVersion");
      __publicField(this, "assignTeikiSerializeData");
      __publicField(this, "assignRoutes", []);
      __publicField(this, "assignDetailRoutes", []);
      __publicField(this, "offpeakTeikiMode");
      __publicField(this, "assignPassClassIndex");
      __publicField(this, "coupon");
      __publicField(this, "bringAssignmentError");
      __publicField(this, "addAssignStatus");
      __publicField(this, "addChange");
      __publicField(this, "addStop");
      __publicField(this, "addSeatType");
      __publicField(this, "gcs");
      this.conditionDetails = "T32212332323191:F332112212000010:A23121141:".split(":");
      this.gcs = "tokyo";
    }
    addArrayParams(params, key, array) {
      if (array.length > 0) {
        params[key] = array.join(":");
      }
    }
    addBooleanParams(params, key, value) {
      if (typeof value === "boolean") {
        params[key] = String(value);
      }
    }
    execute() {
      const params = {};
      this.addArrayParams(params, "viaList", this.viaList);
      this.addArrayParams(params, "conditionDetail", this.conditionDetails);
      this.addBooleanParams(params, "excludeSameLineStation", this.excludeSameLineStation);
      this.addArrayParams(params, "fixedRailList", this.fixedRailList);
      this.addArrayParams(params, "fixedRailDirectionList", this.fixedRailDirectionList);
      if (this.date) {
        params["date"] = `${Utilities.formatDate(this.date, "JST", "YYYYMMdd")}`;
        params["time"] = `${Utilities.formatDate(this.date, "JST", "HHmm")}`;
      }
      params["searchType"] = this.searchType;
      params["sort"] = this.sort;
      params["answerCount"] = String(this.answerCount);
      params["searchCount"] = String(this.searchCount);
      this.addArrayParams(params, "corporationBind", this.corporationBinds);
      this.addArrayParams(params, "interruptCorporationList", this.interruptCorporationList);
      this.addArrayParams(params, "interruptRailList", this.interruptRailList);
      this.addArrayParams(params, "interruptOperationLineCodeList", this.interruptOperationLineCodeList);
      this.addArrayParams(params, "interruptTransferStationCodeList", this.interruptTransferStationCodeList);
      if (this.resultDetail) params["resultDetail"] = this.resultDetail;
      this.addBooleanParams(params, "addOperationLinePattern", this.addOperationLinePattern);
      this.addBooleanParams(params, "checkEngineVersion", this.checkEngineVersion);
      if (this.assignTeikiSerializeData) params["assignTeikiSerializeData"] = this.assignTeikiSerializeData;
      this.addArrayParams(params, "assignRoute", this.assignRoutes);
      this.addArrayParams(params, "assignDetailRoute", this.assignDetailRoutes);
      if (this.offpeakTeikiMode) params["offpeakTeikiMode"] = this.offpeakTeikiMode;
      if (typeof this.assignPassClassIndex === "number") {
        params["assignPassClassIndex"] = String(this.assignPassClassIndex);
      }
      if (this.coupon) params["coupon"] = this.coupon;
      this.addBooleanParams(params, "bringAssignmentError", this.bringAssignmentError);
      this.addBooleanParams(params, "addAssignStatus", this.addAssignStatus);
      this.addBooleanParams(params, "addChange", this.addChange);
      this.addBooleanParams(params, "addStop", this.addStop);
      this.addBooleanParams(params, "addSeatType", this.addSeatType);
      params["gcs"] = this.gcs;
      const res = super._execute("/search/course/extreme", params);
      return (Array.isArray(res.Course) ? res.Course : [res.Course]).map((course) => new Course(course));
    }
  };

  // src/client.ts
  var Client3 = class {
    constructor(apiKey) {
      __publicField(this, "apiKey");
      __publicField(this, "baseUrl");
      this.apiKey = apiKey;
      this.baseUrl = "https://api.ekispert.jp";
    }
    courseExtremeQuery() {
      return new CourseExtreme(this);
    }
  };

  // src/index.ts
  globalThis.Client = Client3;
})();
