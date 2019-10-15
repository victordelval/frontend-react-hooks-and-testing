import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Professor from "./professor";

configure({ adapter: new Adapter() });

describe("<Professor />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Professor />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
