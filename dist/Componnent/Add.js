"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ResultCard = _interopRequireDefault(require("./ResultCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Api_key = '2ad525e8b294ac4b9bae3dda4a1faeb8';
const Add = () => {
  const [query, setQuery] = (0, _react.useState)('');
  const [result, setresult] = (0, _react.useState)([]);
  const onChanged = e => {
    setQuery(e.target.value);
    fetch("https://api.themoviedb.org/3/search/movie?api_key=2ad525e8b294ac4b9bae3dda4a1faeb8&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then(res => {
      res.json().then(data => {
        if (!data.errors) {
          console.log(data.results);
          setresult(data.results);
        } else {
          setresult([]);
        }
      });
    }).catch(err => {
      console.log(err);
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "add-page"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "add-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "search for movie",
    value: query,
    onChange: onChanged
  })), result.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "results"
  }, result.map(movie => /*#__PURE__*/_react.default.createElement("li", {
    key: movie.id
  }, /*#__PURE__*/_react.default.createElement(_ResultCard.default, {
    movie: movie
  })))))));
};
var _default = exports.default = Add;