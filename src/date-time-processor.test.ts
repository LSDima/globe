/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { describe, it, expect } from 'vitest';
const { 
    DateTimeProcessor
  } = require('../dist/index');

describe('date-time-processor', () => {

    describe('functionality', () => {
      it('constructs without throwing', () => {
        expect(() => new DateTimeProcessor('en-US')).not.toThrow();
      });
    });
});
