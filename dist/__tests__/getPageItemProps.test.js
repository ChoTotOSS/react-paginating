'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _sinon = require('sinon');

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _setup4 = require('../fixtures/setup');

var _setup5 = _interopRequireDefault(_setup4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
var _global = global,
    describe = _global.describe,
    it = _global.it;

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('getPageItemProps()', function () {
  it('Event - onClick on page item', function () {
    var handlePageClickSpy = (0, _sinon.spy)();

    var _setup = (0, _setup5.default)({
      itemProps: {
        onPageChange: handlePageClickSpy
      }
    }),
        BasicPagination = _setup.BasicPagination,
        Children = _setup.Children;

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(BasicPagination, { total: _setup4.total, limit: _setup4.limit }));

    // page 1
    var item1 = wrapper.find('#page_1');
    item1.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: 1
    }));

    // page 3
    var item3 = wrapper.find('#page_3');
    item3.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: 3
    }));

    // first page - ⏮
    var itemFirst = wrapper.find('#page_first');
    itemFirst.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: 1
    }));

    // last page - ⏭
    var itemLast = wrapper.find('#page_last');
    itemLast.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: _setup4.totalPages
    }));

    // prev page - 1 - ⏪
    var itemPrev = wrapper.find('#page_prev');
    itemPrev.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: _setup4.totalPages - 1
    }));

    // prev page - 2 - ⏪
    var itemPrev2 = wrapper.find('#page_prev');
    itemPrev2.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: _setup4.totalPages - 2
    }));

    // next page - ⏩
    var itemNext = wrapper.find('#page_next');
    itemNext.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: 4
    }));
  });

  it('current page = 0', function () {
    var handlePageClickSpy = (0, _sinon.spy)();

    var _setup2 = (0, _setup5.default)({
      itemProps: {
        onPageChange: handlePageClickSpy
      }
    }),
        BasicPagination = _setup2.BasicPagination,
        Children = _setup2.Children;

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(BasicPagination, { total: _setup4.total, limit: _setup4.limit, currentPage: 0 }));

    // next page - ⏩
    var itemNext = wrapper.find('#page_next');
    itemNext.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: 2
    }));
  });

  it('current page > totalPages', function () {
    var handlePageClickSpy = (0, _sinon.spy)();

    var _setup3 = (0, _setup5.default)({
      itemProps: {
        onPageChange: handlePageClickSpy
      }
    }),
        BasicPagination = _setup3.BasicPagination,
        Children = _setup3.Children;

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(BasicPagination, {
      total: _setup4.total,
      limit: _setup4.limit,
      currentPage: _setup4.totalPages + 1
    }));

    // prev page - 1 - ⏪
    var itemPrev = wrapper.find('#page_prev');
    itemPrev.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(expect.objectContaining({
      currentPage: _setup4.totalPages - 1
    }));
  });
});