"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _sinon = require("sinon");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _setup3 = _interopRequireWildcard(require("../fixtures/setup"));

var _ = _interopRequireDefault(require("../"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
var _global = global,
    describe = _global.describe,
    it = _global.it;

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('<Pagination />', function () {
  it('calls UNSAFE_componentWillMount() lifecycle method', function () {
    var _setup = (0, _setup3.default)(),
        BasicPagination = _setup.BasicPagination;

    var componentWillMountSpy = (0, _sinon.spy)(_.default.prototype, 'UNSAFE_componentWillMount');
    (0, _enzyme.mount)(_react.default.createElement(BasicPagination, {
      total: _setup3.total,
      currentPage: 2
    }));
    expect(_.default.prototype.UNSAFE_componentWillMount.calledOnce).toBe(true);
    componentWillMountSpy.restore();
  });
  it('calls UNSAFE_componentWillReceiveProps() lifecycle method', function () {
    var _setup2 = (0, _setup3.default)(),
        BasicPagination = _setup2.BasicPagination;

    var componentWillReceivePropsSpy = (0, _sinon.spy)(_.default.prototype, 'UNSAFE_componentWillReceiveProps');
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(BasicPagination, {
      total: _setup3.total,
      currentPage: 2
    }));
    expect(_.default.prototype.UNSAFE_componentWillReceiveProps.calledOnce).toBe(false);
    wrapper.setProps({
      currentPage: 3
    });
    expect(_.default.prototype.UNSAFE_componentWillReceiveProps.calledOnce).toBe(true);
    componentWillReceivePropsSpy.restore();
  });
});