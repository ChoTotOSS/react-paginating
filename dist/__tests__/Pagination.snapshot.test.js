"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _global = global,
    describe = _global.describe,
    it = _global.it;
describe('Pagination render page items', function () {
  it('should render page items 1 -> 5', function () {
    var total = 90;
    var limit = 10;
    var currentPage = 1;

    var tree = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: total,
      limit: limit,
      pageCount: 5,
      currentPage: currentPage
    }, function (_ref) {
      var pages = _ref.pages,
          currentPage = _ref.currentPage,
          hasNextPage = _ref.hasNextPage,
          hasPreviousPage = _ref.hasPreviousPage,
          previousPage = _ref.previousPage,
          nextPage = _ref.nextPage,
          totalPages = _ref.totalPages,
          getPageItemProps = _ref.getPageItemProps;
      return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: 1
      }), {
        id: "page_first",
        href: "1"
      }), "first"), hasPreviousPage && _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: previousPage
      }), {
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
        }, getPageItemProps({
          pageValue: page
        })), page);
      }), hasNextPage && _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: nextPage
      }), {
        id: "page_next",
        href: "".concat(nextPage)
      }), '>'), _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: totalPages
      }), {
        id: "page_last",
        href: "".concat(totalPages)
      }), "last")));
    })).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should render page items 2 -> 6', function () {
    var total = 90;
    var limit = 10;
    var currentPage = 4;

    var tree = _reactTestRenderer.default.create(_react.default.createElement(_.default, {
      total: total,
      limit: limit,
      pageCount: 5,
      currentPage: currentPage
    }, function (_ref2) {
      var pages = _ref2.pages,
          currentPage = _ref2.currentPage,
          hasNextPage = _ref2.hasNextPage,
          hasPreviousPage = _ref2.hasPreviousPage,
          previousPage = _ref2.previousPage,
          nextPage = _ref2.nextPage,
          totalPages = _ref2.totalPages,
          getPageItemProps = _ref2.getPageItemProps;
      return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: 1
      }), {
        id: "page_first",
        href: "1"
      }), "first"), hasPreviousPage && _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: previousPage
      }), {
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
        }, getPageItemProps({
          pageValue: page
        })), page);
      }), hasNextPage && _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: nextPage
      }), {
        id: "page_next",
        href: "".concat(nextPage)
      }), '>'), _react.default.createElement("a", _extends({}, getPageItemProps({
        pageValue: totalPages
      }), {
        id: "page_last",
        href: "".concat(totalPages)
      }), "last")));
    })).toJSON();

    expect(tree).toMatchSnapshot();
  });
});