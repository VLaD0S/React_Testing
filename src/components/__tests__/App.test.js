import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import App from "components/App";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  console.log("--one instance of comment box found");
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
  console.log("--one instance of comment list found");
});
