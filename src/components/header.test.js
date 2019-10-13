import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';
import { Link, MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
  })
  
  it('should render 3 router <Link /> elements', () => {
    expect(wrapper.find(Link)).toHaveLength(3)
  })

  it('should render one router <Link /> to "/"', () => {
    expect(wrapper.findWhere(link => link.prop('to') === '/')).toHaveLength(1)
  })

  it('should render one router <Link /> to "/schedules-by-professor"', () => {
    expect(wrapper.findWhere(link => link.prop('to') === '/schedules-by-professor')).toHaveLength(1)
  })

  it('should render one router <Link /> to "/schedules-by-subject"', () => {
    expect(wrapper.findWhere(link => link.prop('to') === '/schedules-by-subject')).toHaveLength(1)
  })
})