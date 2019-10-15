import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LinkCard from "./linkCard";

configure({ adapter: new Adapter() });

describe("<LinkCard />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<LinkCard to="/"  />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
