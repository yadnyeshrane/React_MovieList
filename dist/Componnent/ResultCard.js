"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GlobalState = require("../Context/GlobalState");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ResultCard = _ref => {
  let {
    movie
  } = _ref;
  const {
    watched,
    watchlist,
    addMovie
  } = (0, _react.useContext)(_GlobalState.GlobalContext);
  let storedMovie = watchlist.find(o => o.id === movie.id);
  let storedWatched = watched.find(o => o.id === movie.id);
  const watchtoogs = storedMovie ? true : storedWatched ? true : false;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "result-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "poster-wrapper"
  }, movie.poster_path ? /*#__PURE__*/_react.default.createElement("img", {
    src: "https://image.tmdb.org/t/p/w200".concat(movie.poster_path),
    alt: "".concat(movie.title, "Poster")
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-poster"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "title"
  }, movie.title), /*#__PURE__*/_react.default.createElement("h4", {
    className: "release-date"
  }, movie.release_date.substring(0, 4))), /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    onClick: () => addMovie(movie),
    disabled: watchtoogs
  }, "Add To Watchlist")))));
};
var _default = exports.default = ResultCard;