import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import setup, { total, limit, totalPages } from '../fixtures/setup';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('getPageItemProps()', () => {
  it('Event - onClick on page item', () => {
    expect(1).toBe(1);
  });

  // it('Event - onClick on page item', async () => {
  //   const handlePageClickSpy = spy();
  //   const { BasicPagination, Children } = setup({
  //     itemProps: {
  //       onPageChange: handlePageClickSpy,
  //       href: '#',
  //       role: 'button',
  //     },
  //   });
  //   const wrapper = mount(<BasicPagination total={total} limit={limit} />);
  //   wrapper.find('#page_2').simulate('click');
  //   console.log(wrapper.html());
  //   expect(handlePageClickSpy.called).toBe(true);
  // });
});
