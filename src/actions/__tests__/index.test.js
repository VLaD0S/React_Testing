import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";
import randomer from "misc/randomer";

describe("SAVE_COMMENT action", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const testPayload = randomer(20);
    const action = saveComment(testPayload);
    console.log(
      "testing the action to return the correct payload of: ",
      testPayload
    );
    expect(action.payload).toEqual(testPayload);
  });
});
