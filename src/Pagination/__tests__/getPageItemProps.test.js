import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestPagination from '../fixtures/TestPagination';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('getPageItemProps()', () => {
  it('Event - onClick on page item', () => {
    const wrapper = mount(<TestPagination />);

    // page 2
    let expectation = `<div><ul><li>banana</li><li>avocado</li></ul><div><div><button id="page_first">first</button><button id="page_prev">&lt;</button><button id="page_1" style="">1</button><button id="page_2" style="background-color: rgb(253, 206, 9);">2</button><button id="page_3">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_2').simulate('click');
    expect(wrapper.html()).toBe(expectation);

    // page 1
    expectation = `<div><ul><li>apple</li><li>orange</li></ul><div><div><button id="page_first">first</button><button id="page_1" style="background-color: rgb(253, 206, 9);">1</button><button id="page_2" style="">2</button><button id="page_3">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_first').simulate('click');
    expect(wrapper.html()).toBe(expectation);

    // page 2
    expectation = `<div><ul><li>banana</li><li>avocado</li></ul><div><div><button id="page_first">first</button><button id="page_prev">&lt;</button><button id="page_1" style="">1</button><button id="page_2" style="background-color: rgb(253, 206, 9);">2</button><button id="page_3">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_next').simulate('click');
    expect(wrapper.html()).toBe(expectation);

    // page 3
    expectation = `<div><ul><li>coconut</li><li>blueberry</li></ul><div><div><button id="page_first">first</button><button id="page_prev">&lt;</button><button id="page_2" style="">2</button><button id="page_3" style="background-color: rgb(253, 206, 9);">3</button><button id="page_4">4</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_next').simulate('click');
    expect(wrapper.html()).toBe(expectation);

    // last page - 5
    expectation = `<div><ul><li>pear</li><li>plum</li></ul><div><div><button id="page_first">first</button><button id="page_prev">&lt;</button><button id="page_3" style="">3</button><button id="page_4">4</button><button id="page_5" style="background-color: rgb(253, 206, 9);">5</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_last').simulate('click');
    expect(wrapper.html()).toBe(expectation);

    // first page - 1
    expectation = `<div><ul><li>apple</li><li>orange</li></ul><div><div><button id="page_first">first</button><button id="page_1" style="background-color: rgb(253, 206, 9);">1</button><button id="page_2">2</button><button id="page_3" style="">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;
    wrapper.find('#page_first').simulate('click');
    expect(wrapper.html()).toBe(expectation);
  });
});
