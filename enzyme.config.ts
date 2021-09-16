// https://github.com/basarat/typescript-book/blob/master/docs/testing/jest.md#step-2-configure-jest

import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


configure({ adapter: new EnzymeAdapter() });
