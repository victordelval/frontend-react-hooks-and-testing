import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./header";
import { Link, MemoryRouter } from "react-router-dom";

import { AppConfig } from "../../utils/config";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 3 router <Link /> elements", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });

  it('should render one router <Link /> to "/"', () => {
    expect(wrapper.findWhere(link => link.prop("to") === "/")).toHaveLength(1);
  });

  it('should render one router <Link /> to subject professor page', () => {
    expect(
      wrapper.findWhere(link => link.prop("to") === AppConfig.routes.subjectProfessor)
    ).toHaveLength(1);
  });

  it('should render one router <Link /> to other professors page', () => {
    expect(
      wrapper.findWhere(link => link.prop("to") === AppConfig.routes.otherProfessors)
    ).toHaveLength(1);
  });
});
