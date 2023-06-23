/**
 * @jest-environment jsdom
 */
import { strLength, reverseString } from "./index.js";
test("strLength should return the correct char count", () => {
    const input = "this is test case";
    const output = 17;

    const result = strLength(input);

    expect(result).toBe(output);
});

test("reverseString should return the reversed string", () => {
    const input = "Hello World";
    const expectedOutput = "dlroW olleH";

    const result = reverseString(input);

    expect(result).toEqual(expectedOutput);
});
