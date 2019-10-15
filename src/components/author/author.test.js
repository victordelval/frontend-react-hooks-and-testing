import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Author from "./author";

configure({ adapter: new Adapter() });

describe("<Author />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Author />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
