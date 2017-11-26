'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));

    _this._getPageItemProps = function (props) {
      var pageValue = props.pageValue,
          handlePageChange = props.onPageChange;


      var onPageChange = function onPageChange() {
        if (typeof handlePageChange === 'function') {
          handlePageChange(pageValue);
        }
        _this.setState({
          currentPage: pageValue
        });
      };

      return {
        onClick: onPageChange
      };
    };

    _this.state = {
      currentPage: 0
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.currentPage) {
        this.setState({
          currentPage: parseInt(this.props.currentPage, 10)
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentPage !== this.props.currentPage) {
        this.setState({
          currentPage: parseInt(nextProps.currentPage, 10)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          total = _props.total,
          limit = _props.limit,
          pageCount = _props.pageCount;
      var currentPage = this.state.currentPage;


      var pageInfo = (0, _utils.getPageInfo)({
        limit: limit,
        pageCount: pageCount,
        total: total,
        page: currentPage
      });

      var firstPage = pageInfo.firstPage,
          lastPage = pageInfo.lastPage,
          hasNextPage = pageInfo.hasNextPage,
          hasPreviousPage = pageInfo.hasPreviousPage,
          previousPage = pageInfo.previousPage,
          nextPage = pageInfo.nextPage,
          totalPages = pageInfo.totalPages;


      var pages = total ? (0, _utils.getRange)(firstPage, lastPage) : [];

      return _react2.default.createElement(
        'div',
        null,
        this.props.children({
          pages: pages,
          previousPage: previousPage,
          nextPage: nextPage,
          totalPages: totalPages,
          currentPage: currentPage,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage,
          getPageItemProps: this._getPageItemProps
        })
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  total: _propTypes2.default.number.isRequired,
  limit: _propTypes2.default.number,
  pageCount: _propTypes2.default.number,
  currentPage: _propTypes2.default.number,
  pageValue: _propTypes2.default.number,
  children: _propTypes2.default.func.isRequired,
  onPageChange: _propTypes2.default.func
};

Pagination.defaultProps = {
  limit: 10,
  pageCount: 5,
  currentPage: 0,
  pageValue: 0
};

exports.default = Pagination;