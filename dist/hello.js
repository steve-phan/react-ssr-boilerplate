"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = exports.goodbye = void 0;

var hello = function hello() {
  return console.log('Hello World');
};

exports.hello = hello;

var goodbye = function goodbye() {
  return console.log('goodbye');
};

exports.goodbye = goodbye;