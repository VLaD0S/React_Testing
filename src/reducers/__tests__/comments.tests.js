import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";
import randomer from "misc/randomer";

it("handles action of type SAVE_COMMENT", () => {
  const demoLoad = "New Comment";
  const action = {
    type: SAVE_COMMENT,
    payload: demoLoad
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([demoLoad]);
});

it("handles action of unknown type", () => {
  const randomState = randomer(20);
  const newState = commentsReducer([], { type: randomState });
  console.log("Provided State:", randomState);
  console.log("Expected State:", newState);
  expect(newState).toEqual([]);
});
