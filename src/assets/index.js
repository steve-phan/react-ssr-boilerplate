"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _reactRedux = require("react-redux");

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: _store.store
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.querySelector('#root'));