import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import setup, { total } from '../fixtures/setup';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  it('Active page is a number 2', () => {
    const expectation = `<div><div><a id="page_first" href="1">first</a><a id="page_prev" href="1">&lt;</a><a id="page_1" href="1">1</a><a id="page_2" href="2" style="background-color:#fdce09">2</a><a id="page_3" href="3">3</a><a id="page_next" href="3">&gt;</a><a id="page_last" href="5">last</a></div></div>`;
    const { BasicPagination } = setup();
    const wrapper = shallow(<BasicPagination total={total} currentPage={2} />);
    expect(wrapper.html()).toBe(expectation);
  });

  it('Active page is a number 3', () => {
    const expectation = `<div><div><a id="page_first" href="1">first</a><a id="page_prev" href="2">&lt;</a><a id="page_2" href="2">2</a><a id="page_3" href="3" style="background-color:#fdce09">3</a><a id="page_4" href="4">4</a><a id="page_next" href="4">&gt;</a><a id="page_last" href="5">last</a></div></div>`;
    const { BasicPagination } = setup();
    const wrapper = shallow(<BasicPagination total={total} currentPage={3} />);
    expect(wrapper.html()).toBe(expectation);
  });
});
