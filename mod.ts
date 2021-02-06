import { assertMatch } from "https://deno.land/std@0.86.0/testing/asserts.ts";
/**
 * Asserts whether or not a list of strings can be matched by the given RegExp.
 * @param matches - An array of strings representing desired matches
 * @param expected - A regular expression
 */
export function assertMatches(matches: string[], expected: RegExp): void {
    if (matches.length === 0) return console.warn("Warning: assertMatches called on empty array.");
    if (!(expected instanceof RegExp)) throw new Error(`Error: value for parameter ${expected} is not of type RegExp`);
    matches.forEach(m => {
        if (typeof m !== 'string') throw new Error(`Error: Cannot assert match on non-string value ${m}.`);
        assertMatch(m, expected);
    });
}
