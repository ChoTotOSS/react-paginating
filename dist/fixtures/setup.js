'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.total = exports.totalPages = exports.currentPage = exports.pageCount = exports.limit = exports.fruits = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = setup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fruits = exports.fruits = [['apple', 'orange'], ['banana', 'avocado'], ['coconut', 'blueberry'], ['payaya', 'peach'], ['pear', 'plum']];

var limit = exports.limit = 2;
var pageCount = exports.pageCount = 3;
var currentPage = exports.currentPage = 1;
var totalPages = exports.totalPages = fruits.length;
var total = exports.total = fruits.length * limit;

function setup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$data = _ref.data,
      data = _ref$data === undefined ? fruits : _ref$data,
      _ref$itemProps = _ref.itemProps,
      itemProps = _ref$itemProps === undefined ? {} : _ref$itemProps;

  var Children = jest.fn(function (_ref2) {
    var pages = _ref2.pages,
        currentPage = _ref2.currentPage,
        hasNextPage = _ref2.hasNextPage,
        hasPreviousPage = _ref2.hasPreviousPage,
        previousPage = _ref2.previousPage,
        nextPage = _ref2.nextPage,
        totalPages = _ref2.totalPages,
        getPageItemProps = _ref2.getPageItemProps;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        _extends({}, getPageItemProps(_extends({ pageValue: 1 }, itemProps)), {
          id: 'page_first',
          href: '1'
        }),
        'first'
      ),
      hasPreviousPage && _react2.default.createElement(
        'a',
        _extends({}, getPageItemProps(_extends({ pageValue: previousPage }, itemProps)), {
          id: 'page_prev',
          href: '' + previousPage
        }),
        '<'
      ),
      pages.map(function (page) {
        var activePage = null;
        if (currentPage === page) {
          activePage = { backgroundColor: '#fdce09' };
        }
        return _react2.default.createElement(
          'a',
          _extends({
            id: 'page_' + page,
            key: page,
            href: '' + page
          }, getPageItemProps(_extends({ pageValue: page }, itemProps))),
          page
        );
      }),
      hasNextPage && _react2.default.createElement(
        'a',
        _extends({}, getPageItemProps(_extends({ pageValue: nextPage }, itemProps)), {
          id: 'page_next',
          href: '' + nextPage
        }),
        '>'
      ),
      _react2.default.createElement(
        'a',
        _extends({}, getPageItemProps(_extends({ pageValue: totalPages }, itemProps)), {
          id: 'page_last',
          href: '' + totalPages
        }),
        'last'
      )
    );
  });

  function BasicPagination(props) {
    return _react2.default.createElement(
      _2.default,
      _extends({
        total: total,
        limit: limit,
        pageCount: pageCount,
        currentPage: currentPage
      }, props),
      Children
    );
  }
  return {
    BasicPagination: BasicPagination,
    Children: Children
  };
}