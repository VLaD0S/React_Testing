/**
 * -- SETUP FOR ENZYME --
 * -> name of file must remain setupTests.js and must lie within the src directory.
 */
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
