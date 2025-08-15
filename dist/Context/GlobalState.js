"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProvider = exports.GlobalContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AppReducer = _interopRequireDefault(require("./AppReducer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
//intail state

const intialSatte = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
};

//create context
const GlobalContext = exports.GlobalContext = /*#__PURE__*/(0, _react.createContext)(intialSatte);
//provider

const GlobalProvider = props => {
  const [state, dispatch] = (0, _react.useReducer)(_AppReducer.default, intialSatte);
  (0, _react.useEffect)(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addMovie = movie => {
    dispatch({
      type: 'AddMovie',
      payload: movie
    });
  };
  const removemovie = id => {
    dispatch({
      type: 'Remove',
      payload: id
    });
  };
  const watchedMovie = movie => {
    dispatch({
      type: 'Watched',
      payload: movie
    });
  };
  const backtoWatch = movie => {
    dispatch({
      type: 'Movedtowatch',
      payload: movie
    });
  };
  const removeWatched = id => {
    dispatch({
      type: 'RemoveWatched',
      payload: id
    });
  };
  return /*#__PURE__*/_react.default.createElement(GlobalContext.Provider, {
    value: {
      watchlist: state.watchlist,
      watched: state.watched,
      addMovie,
      removemovie,
      watchedMovie,
      backtoWatch,
      removeWatched
    }
  }, props.children);
};
exports.GlobalProvider = GlobalProvider;