"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setup;
exports.total = exports.totalPages = exports.currentPage = exports.pageCount = exports.limit = exports.fruits = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fruits = [['apple', 'orange'], ['banana', 'avocado'], ['coconut', 'blueberry'], ['payaya', 'peach'], ['pear', 'plum']];
exports.fruits = fruits;
var limit = 2;
exports.limit = limit;
var pageCount = 3;
exports.pageCount = pageCount;
var currentPage = 1;
exports.currentPage = currentPage;
var totalPages = fruits.length;
exports.totalPages = totalPages;
var total = fruits.length * limit;
exports.total = total;

function setup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? fruits : _ref$data,
      _ref$itemProps = _ref.itemProps,
      itemProps = _ref$itemProps === void 0 ? {} : _ref$itemProps;

  var Children = jest.fn(function (_ref2) {
    var pages = _ref2.pages,
        currentPage = _ref2.currentPage,
        hasNextPage = _ref2.hasNextPage,
        hasPreviousPage = _ref2.hasPreviousPage,
        previousPage = _ref2.previousPage,
        nextPage = _ref2.nextPage,
        totalPages = _ref2.totalPages,
        getPageItemProps = _ref2.getPageItemProps;
    return _react.default.createElement("div", null, _react.default.createElement("a", _extends({}, getPageItemProps(_objectSpread({
      pageValue: 1
    }, itemProps)), {
      id: "page_first",
      href: "1"
    }), "first"), hasPreviousPage && _react.default.createElement("a", _extends({}, getPageItemProps(_objectSpread({
      pageValue: previousPage
    }, itemProps)), {
      id: "page_prev",
      href: "".concat(previousPage)
    }), '<'), pages.map(function (page) {
      var activePage = null;

      if (currentPage === page) {
        activePage = {
          backgroundColor: '#fdce09'
        };
      }

      return _react.default.createElement("a", _extends({
        id: "page_".concat(page),
        key: page,
        href: "".concat(page)
      }, getPageItemProps(_objectSpread({
        pageValue: page
      }, itemProps))), page);
    }), hasNextPage && _react.default.createElement("a", _extends({}, getPageItemProps(_objectSpread({
      pageValue: nextPage
    }, itemProps)), {
      id: "page_next",
      href: "".concat(nextPage)
    }), '>'), _react.default.createElement("a", _extends({}, getPageItemProps(_objectSpread({
      pageValue: totalPages
    }, itemProps)), {
      id: "page_last",
      href: "".concat(totalPages)
    }), "last"));
  });

  function BasicPagination(props) {
    return _react.default.createElement(_.default, _extends({
      total: total,
      limit: limit,
      pageCount: pageCount,
      currentPage: currentPage
    }, props), Children);
  }

  return {
    BasicPagination: BasicPagination,
    Children: Children
  };
}