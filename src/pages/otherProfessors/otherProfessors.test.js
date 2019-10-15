import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Subject from "./subject";

configure({ adapter: new Adapter() });

describe("<Subject />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Subject />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
