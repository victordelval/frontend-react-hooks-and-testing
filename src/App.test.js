import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Route, MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import Professor from "./pages/professor/professor";
import OtherProfessors from "./pages/otherProfessors/otherProfessors";
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

  it('should render one router <Route /> to path "/profesor-asignatura"', () => {
    expect(
      wrapper.findWhere(
        route => route.prop("path") === "/profesor-asignatura"
      )
    ).toHaveLength(1);
  });

  it('should render one router <Route /> to path "/otros-profesores"', () => {
    expect(
      wrapper.findWhere(route => route.prop("path") === "/otros-profesores")
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
    expect(component.find(OtherProfessors)).toHaveLength(0);
    expect(component.find(NotFound)).toHaveLength(0);
  });

  it('should render <Professor /> when navigating to path "/profesor-asignatura"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/profesor-asignatura"]}>
        <App />
      </MemoryRouter>
    );
    // console.log("Professor")
    // console.log(component.find(Professor).props())
    expect(component.find(Professor)).toHaveLength(1);
    expect(component.find(Home)).toHaveLength(0);
  });

  it('should render <OtherProfessors /> when navigating to path "/otros-profesores"', () => {
    const component = mount(
      <MemoryRouter initialEntries={["/otros-profesores"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(OtherProfessors)).toHaveLength(1);
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

  // it('should render one router <Link /> to "/profesor-asignatura"', () => {
  //   expect(wrapper.findWhere(link => link.prop('to') === '/profesor-asignatura')).toHaveLength(1)
  // })

  // it('should render one router <Link /> to "/otros-profesores"', () => {
  //   expect(wrapper.findWhere(link => link.prop('to') === '/otros-profesores')).toHaveLength(1)
  // })
});
