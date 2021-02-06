import { assertThrows } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { assertMatches } from "./mod.ts";

Deno.test('Asserts correctly on receiving valid inputs' , () => {
    assertMatches(['hello world','deno world','beautiful world','other world'], /\w+ world/);
});
Deno.test('Throws on receiving non-string matches', () => {
    assertThrows(() => {
        return assertMatches([1], /\w+ world/);
    });
});
Deno.test('Throws on receiving non-RegExp pattern', () => {
    assertThrows(() => {
        return assertMatches(['hello world'], '\\w+ world');
    });
});
