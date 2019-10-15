import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loader from './loader'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

configure({ adapter: new Adapter() })

describe('<Loader />', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Loader />)
  })

  it('should default to the bigger one if type prop is not provided', () => {
    expect(wrapper.find(CircularProgress)).toHaveLength(1)
    expect(wrapper.find(CircularProgress).props().size).toEqual(60)
  })

  it('should return a loading text if type prop is "message"', () => {
    wrapper.setProps({ type: 'message' })
    expect(wrapper.find(Typography)).toHaveLength(1)
      expect(wrapper.find(Typography).props().children).toEqual('Loading...')
  })

  it('should return the smaller one if type prop is "header"', () => {
    wrapper.setProps({ type: 'header' })
    expect(wrapper.find(CircularProgress)).toHaveLength(1)    
    expect(wrapper.find(CircularProgress).props().size).toEqual(15)
  })
})
