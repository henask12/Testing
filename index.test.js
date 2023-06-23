/**
 * @jest-environment jsdom
 */
import strLength from "./index.js";
test("strLength should return the correct char count", () => {
    const input = "this is test case";
    const output = 17;

    const result = strLength(input);

    expect(result).toBe(output);
});
