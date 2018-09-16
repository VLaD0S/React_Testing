import React from "react";
import { mount } from "enzyme";
import randomer from "misc/randomer";

import CommentList from "components/CommentList";
import Root from "Root";

// CommentList wrapper
let wrapped;

// list of randomly generated comments to be passed to the initial statte of the root component
let testCommentList;

// number of comments in the testCommentList list.
let commentListSize;
/**
 * 1. Creates a random list of comments and assigns it to the initial state fo the root component.
 * 2. Wrappes the CommentList component in the Root component to connect it to redux
 */
beforeEach(() => {
  commentListSize = 5;

  // creates a list of random comments of size "iter"
  const createCommentsList = (iter = commentListSize) => {
    let testComments = [];
    for (var li = 0; li < iter; li++) {
      testComments.push(randomer(10));
    }
    return testComments;
  };

  testCommentList = createCommentsList(commentListSize);
  const initialState = {
    comments: testCommentList
  };

  console.log("Testing for comments: ", initialState.comments);
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates creates one Li element per comment", () => {
  const foundComments = wrapped.find("li").length;
  expect(foundComments).toEqual(commentListSize);
  console.log(
    "Found",
    foundComments,
    "comments out of the expected",
    commentListSize
  );
});

it("renders the text for each comment properly", () => {
  const listOfAllComments = wrapped.render().text();
  console.log("Looking for all the comments in", listOfAllComments);

  testCommentList.forEach(comment => {
    expect(listOfAllComments).toContain(comment);
    console.log("Found comment ", comment);
  });
});
