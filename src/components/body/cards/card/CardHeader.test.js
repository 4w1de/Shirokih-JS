import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardHeader from './CardHeader';
import {
    AiOutlineEdit,
    AiOutlineCheck,
    AiOutlineCloseCircle,
} from 'react-icons/ai';

configure({ adapter: new Adapter() });

describe('CardHeader', () => {
    let wrapper;

    const defaultProps = {
        editMode: false,
        viewOnly: false,
    };

    beforeEach(() => {
        wrapper = shallow(<CardHeader {...defaultProps} />);
    });

    it('should render', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render Edit-button', () => {
        expect(wrapper.find(AiOutlineEdit)).toHaveLength(1);
        expect(wrapper.find(AiOutlineCheck)).toHaveLength(0);
        expect(wrapper.find(AiOutlineCloseCircle)).toHaveLength(0);
    });

    it('should show button when editing', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.find(AiOutlineEdit)).toHaveLength(0);
        expect(wrapper.find(AiOutlineCheck)).toHaveLength(1);
        expect(wrapper.find(AiOutlineCloseCircle)).toHaveLength(1);
    });

    it('should edit text when editMode: true', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.find('input[type="text"]')).toBeDefined();
    });

    it('should hide button AiOutlineEdit when editMode: false, viewOnly: true', () => {
        wrapper.setProps({ editMode: false, viewOnly: true });
        expect(wrapper.find(AiOutlineEdit)).toHaveLength(0);
    });
});
