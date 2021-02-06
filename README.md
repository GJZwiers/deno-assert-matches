# AssertMatches

A convenience function for testing RegExp objects in Deno. This module provides a function to test if every item in a list of strings is matched by a RegExp. Useful for unit testing and reducing repetition in code.

### Example Usage:

```typescript
import { assertMatches } from 'https://deno.land/x/assert_matches/mod.ts'

Deno.test('Matches strings correctly', () => {
        assertMatches(
            ['hello world','deno world','beautiful world','other world'],
            /\w+ world/
        );
    }
);
```
