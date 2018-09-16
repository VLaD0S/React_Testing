import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;
let teststring;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  console.log(wrapped.find("textarea"));
  console.log(wrapped.find("button"));

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

/**
 * Describing the text area
 */
describe("the text area", () => {
  beforeEach(() => {
    teststring = "new commet";
    /**
     * simulates a change in the virtual DOM
     * Represents the event handler method onChange, which represents the change event.
     *  > onChange: change
     * event.target.value = event { target {value: "value"}}
     */
    wrapped.find("textarea").simulate("change", {
      target: {
        value: teststring
      }
    });

    /**
     * forces the update to happen, which would normally happen asyncronously
     */
    wrapped.update();
  });

  it("has a text area in which the user can type", () => {
    /**
     * Expectation that the value prop to equal to the simulated change above
     */
    expect(wrapped.find("textarea").prop("value")).toEqual(teststring);
    console.log("--textarea succesfully updated. Used the value " + teststring);
  });

  it("empties the text area once the submit button is pressed", () => {
    let teststring = "new comment";
    wrapped.find("textarea").simulate("change", {
      target: {
        value: teststring
      }
    });
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual(teststring);

    wrapped.find("form").simulate("submit");

    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
