// Packages
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

// Components
import Footer from '../../src/components/Footer/Footer';


configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Footer {...props}/>);
    
    return component;
};

const findTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);

    return wrapper;
};

describe('Footer Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('It should render without errors', () => {
        const wrapper = findTestAttr(component, 'footerWrapper');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a links', () => {
        const wrapper = findTestAttr(component, 'footerLink');
        expect(wrapper.length).toBe(2)
    });

    test('Snaphot testing', () => {
        const wrapper = renderer.create(<Footer />).toJSON();
        expect(wrapper).toMatchSnapshot();
    })
})