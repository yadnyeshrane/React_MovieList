"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MoviesControl = _interopRequireDefault(require("./MoviesControl"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MovieCard = _ref => {
  let {
    movie,
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }), movie.poster_path ? /*#__PURE__*/_react.default.createElement("img", {
    src: "https://image.tmdb.org/t/p/w200".concat(movie.poster_path),
    alt: "".concat(movie.title, "Poster")
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-poster"
  }), /*#__PURE__*/_react.default.createElement(_MoviesControl.default, {
    movie: movie,
    type: type
  }));
};
var _default = exports.default = MovieCard;