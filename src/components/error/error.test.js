import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Error from "./error";

configure({ adapter: new Adapter() });

describe("<Error />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Error />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
