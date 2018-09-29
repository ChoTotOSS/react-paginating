import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import setup, { total, limit, totalPages } from '../fixtures/setup';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('getPageItemProps()', () => {
  it('Event - onClick on page item', () => {
    const handlePageClickSpy = spy();

    const { BasicPagination, Children } = setup({
      itemProps: {
        onPageChange: handlePageClickSpy,
      },
    });

    const wrapper = mount(<BasicPagination total={total} limit={limit} />);

    // page 1
    const item1 = wrapper.find('#page_1');
    item1.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: 1,
      }),
    );

    // page 3
    const item3 = wrapper.find('#page_3');
    item3.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: 3,
      }),
    );

    // first page - ⏮
    const itemFirst = wrapper.find('#page_first');
    itemFirst.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: 1,
      }),
    );

    // last page - ⏭
    const itemLast = wrapper.find('#page_last');
    itemLast.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: totalPages,
      }),
    );

    // prev page - 1 - ⏪
    const itemPrev = wrapper.find('#page_prev');
    itemPrev.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: totalPages - 1,
      }),
    );

    // prev page - 2 - ⏪
    const itemPrev2 = wrapper.find('#page_prev');
    itemPrev2.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: totalPages - 2,
      }),
    );

    // next page - ⏩
    const itemNext = wrapper.find('#page_next');
    itemNext.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: 4,
      }),
    );
  });

  it('current page = 0', () => {
    const handlePageClickSpy = spy();

    const { BasicPagination, Children } = setup({
      itemProps: {
        onPageChange: handlePageClickSpy,
      },
    });

    const wrapper = mount(
      <BasicPagination total={total} limit={limit} currentPage={0} />,
    );

    // next page - ⏩
    const itemNext = wrapper.find('#page_next');
    itemNext.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: 2,
      }),
    );
  });

  it('current page > totalPages', () => {
    const handlePageClickSpy = spy();

    const { BasicPagination, Children } = setup({
      itemProps: {
        onPageChange: handlePageClickSpy,
      },
    });

    const wrapper = mount(
      <BasicPagination
        total={total}
        limit={limit}
        currentPage={totalPages + 1}
      />,
    );

    // prev page - 1 - ⏪
    const itemPrev = wrapper.find('#page_prev');
    itemPrev.simulate('click');
    expect(handlePageClickSpy.called).toBe(true);
    expect(Children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        currentPage: totalPages - 1,
      }),
    );
  });
});
