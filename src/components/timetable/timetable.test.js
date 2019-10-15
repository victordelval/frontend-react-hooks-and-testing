import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Timetable from "./timetable";

configure({ adapter: new Adapter() });

describe("<Timetable />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Timetable />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
