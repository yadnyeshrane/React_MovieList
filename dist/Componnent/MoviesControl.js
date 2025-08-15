"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GlobalState = require("../Context/GlobalState");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const MoviesControl = _ref => {
  let {
    movie,
    type
  } = _ref;
  const {
    removemovie,
    watchedMovie,
    backtoWatch,
    removeWatched
  } = (0, _react.useContext)(_GlobalState.GlobalContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-card-controls"
  }, type === "watchlist" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-eye ctrl-btn",
    "aria-hidden": "true",
    onClick: () => watchedMovie(movie)
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-archive ctrl-btn",
    "aria-hidden": "true",
    onClick: () => removemovie(movie.id)
  })), type === "watched" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-long-arrow-left ctrl-btn",
    "aria-hidden": "true",
    onClick: () => {
      backtoWatch(movie);
    }
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-archive ctrl-btn",
    "aria-hidden": "true",
    onClick: () => {
      removeWatched(movie.id);
    }
  })));
};
var _default = exports.default = MoviesControl;