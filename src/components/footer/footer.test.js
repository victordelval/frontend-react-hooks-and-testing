import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "./footer";

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
