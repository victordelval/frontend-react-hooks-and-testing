import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Home from "./home";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Home />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
