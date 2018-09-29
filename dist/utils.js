"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRange = getRange;
exports.getPageInfo = getPageInfo;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getRange(start, end) {
  return _toConsumableArray(Array(end - start + 1)).map(function (_, i) {
    return start + i;
  });
}

function getPageInfo(_ref) {
  var limit = _ref.limit,
      pageCount = _ref.pageCount,
      total = _ref.total,
      page = _ref.page;
  var totalPages = Math.ceil(total / limit);
  var totalResults = parseInt(total, 10);
  var currentPage = parseInt(page, 10);

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  var firstPage = Math.max(1, currentPage - Math.floor(pageCount / 2));
  var lastPage = Math.min(totalPages, currentPage + Math.floor(pageCount / 2));

  if (lastPage - firstPage + 1 < pageCount) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(totalPages, lastPage + (pageCount - (lastPage - firstPage)));
    } else {
      firstPage = Math.max(1, firstPage - (pageCount - (lastPage - firstPage)));
    }
  }

  if (lastPage - firstPage + 1 > pageCount) {
    if (currentPage > totalPages / 2) {
      // eslint-disable-next-line
      firstPage++;
    } else {
      // eslint-disable-next-line
      lastPage--;
    }
  }

  var firstResult = limit * (currentPage - 1);
  var lastResult = limit * currentPage - 1;
  return {
    totalPages: totalPages,
    pages: Math.min(lastPage - firstPage + 1, totalPages),
    currentPage: currentPage,
    firstPage: firstPage,
    lastPage: lastPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalResults: totalResults,
    results: Math.min(lastResult - firstResult + 1, totalResults),
    firstResult: firstResult,
    lastResult: lastResult
  };
}