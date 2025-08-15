"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _Header = _interopRequireDefault(require("./Componnent/Header"));
var _Add = _interopRequireDefault(require("./Componnent/Add"));
var _Watched = _interopRequireDefault(require("./Componnent/Watched"));
var _Watchlist = _interopRequireDefault(require("./Componnent/Watchlist"));
var _GlobalState = require("./Context/GlobalState");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement(_GlobalState.GlobalProvider, null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement("switch", null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(_Watchlist.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/watched"
  }, /*#__PURE__*/React.createElement(_Watched.default, null)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/add"
  }, /*#__PURE__*/React.createElement(_Add.default, null)))));
}
var _default = exports.default = App;