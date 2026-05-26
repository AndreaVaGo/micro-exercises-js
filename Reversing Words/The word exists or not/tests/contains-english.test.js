import {describe, expect, test} from "vitest"
import { english } from "../src/contains-english.js"

describe("English", () => {

    test("should return true", () => {
        const input = "abcEnglishdef";
        const expected = true;
        const result = english(input);
        expect(result).toBe(expected);
    })

    test("should return false", () => {
        const input = "abcnEglishsef";
        const expected = false;
        const result = english(input);
        expect(result).toBe(expected);
    })

})