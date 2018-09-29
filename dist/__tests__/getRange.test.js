"use strict";

var _utils = require("../utils");

var _global = global,
    it = _global.it;
it('should have array with values 1 -> 5', function () {
  var pages = (0, _utils.getRange)(1, 5);

  for (var i = 1; i <= 5; i++) {
    expect(i).toBe(pages[i - 1]);
  }

  expect(pages.length).toBe(5);
});
it('should have array with values 2 -> 5', function () {
  var pages = (0, _utils.getRange)(2, 5);
  var templates = [2, 3, 4, 5];

  for (var i = 0; i < templates.length; i++) {
    expect(templates[i]).toBe(pages[i]);
  }

  expect(pages.length).toBe(4);
});