/**
 * @jest-environment jsdom
 */
import { strLength, reverseString, capitalize } from "./index.js";
test("should return the correct char count", () => {
    const input = "this is test case";
    const output = 17;

    const result = strLength(input);

    expect(result).toBe(output);
});

test("should return the reversed string", () => {
    const input = "Hello World";
    const output = "dlroW olleH";

    const result = reverseString(input);

    expect(result).toEqual(output);
});

test("should capitalize the first character of the string", () => {
    const input = "hello";
    const output = "Hello";

    const result = capitalize(input);

    expect(result).toBe(output);
});
