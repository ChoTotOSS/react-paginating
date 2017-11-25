'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _sinon = require('sinon');

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _setup3 = require('../fixtures/setup');

var _setup4 = _interopRequireDefault(_setup3);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('<Pagination />', function () {
  it('calls componentWillMount() lifecycle method', function () {
    var _setup = (0, _setup4.default)(),
        BasicPagination = _setup.BasicPagination;

    var componentDidMountSpy = (0, _sinon.spy)(_2.default.prototype, 'componentWillMount');
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(BasicPagination, { total: _setup3.total, currentPage: 2 }));
    expect(_2.default.prototype.componentWillMount.calledOnce).toBe(true);
    componentDidMountSpy.restore();
  });

  it('calls componentWillReceiveProps() lifecycle method', function () {
    var _setup2 = (0, _setup4.default)(),
        BasicPagination = _setup2.BasicPagination;

    var componentWillReceivePropsSpy = (0, _sinon.spy)(_2.default.prototype, 'componentWillReceiveProps');
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(BasicPagination, { total: _setup3.total, currentPage: 2 }));
    expect(_2.default.prototype.componentWillReceiveProps.calledOnce).toBe(false);
    wrapper.setProps({
      currentPage: 3
    });
    expect(_2.default.prototype.componentWillReceiveProps.calledOnce).toBe(true);
    componentWillReceivePropsSpy.restore();
  });
});