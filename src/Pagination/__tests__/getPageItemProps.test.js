import React from 'react';

// https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
import Enzyme, { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import TestPagination from '../fixtures/TestPagination';

const { describe, it } = global;
Enzyme.configure({ adapter: new Adapter() });

describe('getPageItemProps()', () => {
  it('Event - onClick on page item - 2', async () => {
    const wrapper = mount(<TestPagination />);
    const expectation = `<div><ul><li>banana</li><li>avocado</li></ul><div><div><button id="page_first">first</button><button id="page_prev">&lt;</button><button id="page_1" style="">1</button><button id="page_2" style="background-color: rgb(253, 206, 9);">2</button><button id="page_3">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;

    wrapper.find('#page_2').simulate('click');
    expect(wrapper.html()).toBe(expectation);
  });

  it('Event - onClick on page item - first', async () => {
    const wrapper = mount(<TestPagination />);
    const expectation = `<div><ul><li>apple</li><li>orange</li></ul><div><div><button id="page_first">first</button><button id="page_1" style="background-color: rgb(253, 206, 9);">1</button><button id="page_2">2</button><button id="page_3">3</button><button id="page_next">&gt;</button><button id="page_last">last</button></div></div></div>`;

    wrapper.find('#page_first').simulate('click');
    expect(wrapper.html()).toBe(expectation);
  });
});
