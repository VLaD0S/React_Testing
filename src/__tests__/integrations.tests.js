import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";
import randomer from "misc/randomer";

let numberOfFakeComments;

beforeEach(() => {
  numberOfFakeComments = 500;

  const fakeCommentGenerator = iter => {
    const response = [];
    for (var li = 0; li < iter; li++) {
      const culprit = randomer(10);
      response.push({ name: culprit });
    }
    return response;
  };

  const fakeResponse = fakeCommentGenerator(numberOfFakeComments);
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: fakeResponse
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // attempt to find and click the fetch comments button

  wrapped.find(".fetch-comments").simulate("click");

  // expect to find a list of comments

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(numberOfFakeComments);

    done();
    wrapped.unmount();
  });
});
