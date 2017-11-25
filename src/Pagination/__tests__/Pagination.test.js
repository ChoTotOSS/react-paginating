import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

import setup, { total } from '../fixtures/setup';
import Pagination from '../';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  it('calls componentWillMount() lifecycle method', () => {
    const { BasicPagination } = setup();
    const componentDidMountSpy = spy(
      Pagination.prototype,
      'componentWillMount'
    );
    const wrapper = mount(<BasicPagination total={total} currentPage={2} />);
    expect(Pagination.prototype.componentWillMount.calledOnce).toBe(true);
    componentDidMountSpy.restore();
  });

  it('calls componentWillReceiveProps() lifecycle method', () => {
    const { BasicPagination } = setup();
    const componentWillReceivePropsSpy = spy(
      Pagination.prototype,
      'componentWillReceiveProps'
    );
    const wrapper = mount(<BasicPagination total={total} currentPage={2} />);
    expect(Pagination.prototype.componentWillReceiveProps.calledOnce).toBe(
      false
    );
    wrapper.setProps({
      currentPage: 3
    });
    expect(Pagination.prototype.componentWillReceiveProps.calledOnce).toBe(
      true
    );
    componentWillReceivePropsSpy.restore();
  });
});
