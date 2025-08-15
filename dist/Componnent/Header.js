"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Header = () => {
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Watchlist")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Watchlist")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/watched"
  }, "Watched")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/add",
    className: "btn"
  }, "Add"))))));
};
var _default = exports.default = Header;