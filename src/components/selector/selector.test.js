import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Selector from "./selector";

configure({ adapter: new Adapter() });

describe("<Selector />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Selector />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
