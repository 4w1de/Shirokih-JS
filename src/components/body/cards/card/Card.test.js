import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './index.js';

configure({ adapter: new Adapter() });

describe('Card', () => {
    let wrapper;
    let instance;

    const defaultProps = {
        card: { checked: true, editMode: false },
        changeCheck: jest.fn(),
        changeMode: jest.fn(),
        changeText: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(<Card {...defaultProps} />);
        instance = wrapper.instance();
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should call changeMode in changeMode', () => {
        const spy = jest.spyOn(instance, 'changeMode');
        wrapper.setProps({ card: { editMode: true } });
        instance.changeMode();
        expect(spy).toHaveBeenCalled();
    });
    it('should call changeText in changeText', () => {
        instance.titleRef = { current: { setState: jest.fn() } };
        instance.textRef = { current: { setState: jest.fn() } };
        const spy = jest.spyOn(instance, 'changeText');
        instance.changeText();
        expect(spy).toHaveBeenCalled();
    });
});
