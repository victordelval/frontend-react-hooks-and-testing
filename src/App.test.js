import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Route, MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import Professor from "./pages/professor/professor";
import Subject from "./pages/subject/subject";
import NotFound from "./pages/notFound/notFound";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("should render 4 router <Route /> elements", () => {
    expect(wrapper.find(Route)).toHaveLength(4);
  });

  it('should render one router <Route /> to path "/"', () => {
    expect(wrapper.findWhere(route => route.prop("path") === "/")).toHaveLength(
      1
    );
  });

  it('should render one router <Route /> to path "/schedules-by-professor"', () => {
    expect(
      wrapper.findWhere(
        route => route.prop("path") === "/schedules-by-professor"
      )
    ).toHaveLength(1);
  });

  it('should render one router <Route /> to path "/schedules-by-subject"', () => {
    expect(
      wrapper.findWhere(route => route.prop("path") === "/schedules-by-subject")
    ).toHaveLength(1);
  });

  // Memory router to check rendered components in path

  it('should render <Home /> when navigating to path "/"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    // console.log("Home")
    // console.log(component.find(Home).props())
    expect(component.find(Home)).toHaveLength(1);
    expect(component.find(Professor)).toHaveLength(0);
    expect(component.find(Subject)).toHaveLength(0);
    expect(component.find(NotFound)).toHaveLength(0);
  });

  it('should render <Professor /> when navigating to path "/schedules-by-professor"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/schedules-by-professor"]}>
        <App />
      </MemoryRouter>
    );
    // console.log("Professor")
    // console.log(component.find(Professor).props())
    expect(component.find(Professor)).toHaveLength(1);
    expect(component.find(Home)).toHaveLength(0);
  });

  it('should render <Subject /> when navigating to path "/schedules-by-subject"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/schedules-by-subject"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(Subject)).toHaveLength(1);
    expect(component.find(Home)).toHaveLength(0);
  });

  it('should render <NotFound /> when navigating to path "/some-path"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/some-path"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(NotFound)).toHaveLength(1);
    expect(component.find(Home)).toHaveLength(0);
  });

  // it('should render one router <Link /> to "/"', () => {
  //   expect(wrapper.findWhere(link => link.prop('to') === '/')).toHaveLength(1)
  // })

  // it('should render one router <Link /> to "/schedules-by-professor"', () => {
  //   expect(wrapper.findWhere(link => link.prop('to') === '/schedules-by-professor')).toHaveLength(1)
  // })

  // it('should render one router <Link /> to "/schedules-by-subject"', () => {
  //   expect(wrapper.findWhere(link => link.prop('to') === '/schedules-by-subject')).toHaveLength(1)
  // })
});
