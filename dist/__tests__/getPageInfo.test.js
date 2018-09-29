"use strict";

var _utils = require("../utils");

var _testCase = require("../fixtures/testCase");

var _global = global,
    it = _global.it;

function compare(result, testCase) {
  expect(result.totalPages).toBe(testCase.totalPages);
  expect(result.pages).toBe(testCase.pages);
  expect(result.currentPage).toBe(testCase.currentPage);
  expect(result.firstPage).toBe(testCase.firstPage);
  expect(result.lastPage).toBe(testCase.lastPage);
  expect(result.previousPage).toBe(testCase.previousPage);
  expect(result.hasPreviousPage).toBe(testCase.hasPreviousPage);
  expect(result.hasNextPage).toBe(testCase.hasNextPage);
  expect(result.totalResults).toBe(testCase.totalResults);
  expect(result.results).toBe(testCase.results);
  expect(result.firstResult).toBe(testCase.firstResult);
  expect(result.lastResult).toBe(testCase.lastResult);
}

it('test case 1', function () {
  var pageInfo = (0, _utils.getPageInfo)({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 1
  });
  compare(pageInfo, _testCase.testCase1);
});
it('test case 2', function () {
  var pageInfo = (0, _utils.getPageInfo)({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 0
  });
  compare(pageInfo, _testCase.testCase1);
});
it('test case 3', function () {
  var limit = 10;
  var total = 90;
  var totalPages = Math.ceil(total / limit);
  var pageInfo = (0, _utils.getPageInfo)({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: totalPages + 1
  });
  compare(pageInfo, _testCase.testCase3);
});
it('test case 4', function () {
  var limit = 10;
  var total = 90;
  var totalPages = Math.ceil(total / limit);
  var pageInfo = (0, _utils.getPageInfo)({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 5
  });
  compare(pageInfo, _testCase.testCase4);
});