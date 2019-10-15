import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Timetable from "./timetable";

configure({ adapter: new Adapter() });

describe("<Timetable />", () => {
  let wrapper;

  beforeAll(() => {
    const schedules= { "lunes": [], "martes": [], "miércoles": [], "jueves": [], "viernes": [] }
    wrapper = shallow(<Timetable schedules={schedules} />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
