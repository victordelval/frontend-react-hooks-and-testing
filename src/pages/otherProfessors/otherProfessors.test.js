import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OtherProfessors from "./otherProfessors";

configure({ adapter: new Adapter() });

describe("<OtherProfessors />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<OtherProfessors />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
