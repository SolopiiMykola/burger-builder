import React from 'react';
import { configure, shallow } from 'enzyme';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({})
describe('<NavigationItems />', () => {
    it('should render two NavigationItems', () => {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItems)).toHaveLength(2)
    })
})