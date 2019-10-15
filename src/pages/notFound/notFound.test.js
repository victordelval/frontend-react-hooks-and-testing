import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NotFound from "./notFound";

configure({ adapter: new Adapter() });

describe("<NotFound />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NotFound />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
