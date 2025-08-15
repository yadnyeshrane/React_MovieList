"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MovieCard = _interopRequireDefault(require("./MovieCard"));
var _GlobalState = require("../Context/GlobalState");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Watched = () => {
  const {
    watched
  } = (0, _react.useContext)(_GlobalState.GlobalContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Watched Movies")), watched.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-grid"
  }, watched.map(movie => /*#__PURE__*/_react.default.createElement(_MovieCard.default, {
    movie: movie,
    type: "watched"
  }))) : /*#__PURE__*/_react.default.createElement("h2", {
    className: "no-movies"
  }, "NO Movies left Add some")));
};
var _default = exports.default = Watched;