import { describe, expect, test } from "vitest";

const person = {
  isActive: false,
  age: 32,
};

describe("person", () => {
  

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});