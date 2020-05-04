/** @format */

import dashToCamelCase from "/utils/dashToCamelCase.js";

describe(dashToCamelCase, () => {
  it("converts a string with a single dash to a camel cased string", () => {
    expect(dashToCamelCase("hey-there")).toEqual("heyThere");
  });

  it("converts a string with multiple dash to a camel cased string", () => {
    expect(dashToCamelCase("how-are-you")).toEqual("howAreYou");
  });

  it("does not convert non-alphabetic characters to camel case ", () => {
    expect(dashToCamelCase("how%are?you")).toEqual("how%are?you");
  });

  it("converts only alphabetic (a-z) characters to camel case ", () => {
    expect(dashToCamelCase("how-4re-you-?today-$")).toEqual(
      "how-4reYou-?today-$"
    );
  });
});
