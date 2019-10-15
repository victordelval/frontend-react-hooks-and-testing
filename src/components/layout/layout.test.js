import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "./layout";

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Layout />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
