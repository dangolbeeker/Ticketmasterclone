// Packages
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Pages
import EventList from '../../src/pages/EventList/EventList'


configure({ adapter: new Adapter() });

describe('EventList component', () => {
    it('Should render without errors', () => {
        const wrapper = shallow(<EventList />);
        expect(wrapper.exists()).toBe(true)
    });

    test('Snaphot testing', () => {
        const wrapper = shallow(
            <EventList />
        );
        expect(wrapper).toMatchSnapshot();
    })
});
