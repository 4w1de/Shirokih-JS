import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardBody from './CardBody';

configure({ adapter: new Adapter() });

describe('CardBody', () => {
    let wrapper;
    let instance;

    const defaultProps = {
        editMode: false,
    };

    beforeEach(() => {
        wrapper = shallow(<CardBody {...defaultProps} />);
        instance = wrapper.instance();
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should edit text when editMode: true', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.find('textarea')).toBeDefined();
    });
});
