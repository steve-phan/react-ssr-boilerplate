"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _hello = require("./hello");

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _hello.hello)();
var PORT = 3000;
var app = (0, _express["default"])();
/*
 * MiddleWares
 */

app.use('/static', _express["default"]["static"]('./src/assets'));
app.get('/', _middlewares.handleRender);
app.listen(PORT, function () {
  return console.log("App is running on ".concat(PORT));
});