"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var testCase1 = exports.testCase1 = {
  totalPages: 9,
  pages: 5,
  currentPage: 1,
  firstPage: 1,
  lastPage: 5,
  previousPage: 0,
  nextPage: 2,
  hasPreviousPage: false,
  hasNextPage: true,
  totalResults: 90,
  results: 10,
  firstResult: 0,
  lastResult: 9
};

var testCase3 = exports.testCase3 = {
  totalPages: 9,
  pages: 5,
  currentPage: 9,
  firstPage: 5,
  lastPage: 9,
  previousPage: 8,
  nextPage: 10,
  hasPreviousPage: true,
  hasNextPage: false,
  totalResults: 90,
  results: 10,
  firstResult: 80,
  lastResult: 89
};

var testCase4 = exports.testCase4 = {
  totalPages: 9,
  pages: 5,
  currentPage: 5,
  firstPage: 3,
  lastPage: 7,
  previousPage: 4,
  nextPage: 6,
  hasPreviousPage: true,
  hasNextPage: true,
  totalResults: 90,
  results: 10,
  firstResult: 40,
  lastResult: 49
};