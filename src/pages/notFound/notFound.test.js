import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

import NotFound from "./notFound";

configure({ adapter: new Adapter() });

describe("<NotFound />", () => {
  let wrapper;

  beforeAll(() => {
    // wrapper = shallow(<NotFound />);
    wrapper = mount(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
