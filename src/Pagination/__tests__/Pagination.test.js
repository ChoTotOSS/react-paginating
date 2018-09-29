import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import setup, { total } from '../fixtures/setup';
import Pagination from '../';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  it('calls UNSAFE_componentWillMount() lifecycle method', () => {
    const { BasicPagination } = setup();
    const componentWillMountSpy = spy(
      Pagination.prototype,
      'UNSAFE_componentWillMount',
    );
    mount(<BasicPagination total={total} currentPage={2} />);
    expect(Pagination.prototype.UNSAFE_componentWillMount.calledOnce).toBe(
      true,
    );
    componentWillMountSpy.restore();
  });

  it('calls UNSAFE_componentWillReceiveProps() lifecycle method', () => {
    const { BasicPagination } = setup();
    const componentWillReceivePropsSpy = spy(
      Pagination.prototype,
      'UNSAFE_componentWillReceiveProps',
    );
    const wrapper = mount(<BasicPagination total={total} currentPage={2} />);
    expect(
      Pagination.prototype.UNSAFE_componentWillReceiveProps.calledOnce,
    ).toBe(false);
    wrapper.setProps({
      currentPage: 3,
    });
    expect(
      Pagination.prototype.UNSAFE_componentWillReceiveProps.calledOnce,
    ).toBe(true);
    componentWillReceivePropsSpy.restore();
  });
});
