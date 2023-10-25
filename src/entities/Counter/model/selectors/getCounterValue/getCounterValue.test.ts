import { type DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { type StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };
    expect(getCounterValue(state)).toEqual(10);
  });
});
