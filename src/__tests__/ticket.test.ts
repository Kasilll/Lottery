import React from 'react';
import { handleCalculateWinner } from '../utils/function';

test('test calculate winner 4 matches in ferst field', () => {
  const isWon = handleCalculateWinner(
    [1, 2, 3, 4, 5, 6, 7, 8], // select ferst
    [1, 2], // select second
    [1, 2, 3, 4, 10, 12, 16, 20], //random ferst
    [5, 6], // random second
  );
  expect(isWon).toBe(true);
});

test('test calculate winner 5 matches in ferst field and 1 second field', () => {
  const isWon = handleCalculateWinner(
    [1, 2, 3, 4, 5, 6, 7, 8], // select ferst
    [1, 2], // select second
    [1, 2, 3, 4, 5, 12, 16, 20], //random fers
    [1, 6], // random second
  );
  expect(isWon).toBe(true);
});

test('test calculate winner 3 matches in ferst field and 1 second field', () => {
  const isWon = handleCalculateWinner(
    [1, 2, 3, 4, 5, 6, 7, 8], // select ferst
    [1, 2], // select second
    [1, 2, 3, 9, 10, 12, 16, 20], //random fers
    [1, 6], // random second
  );
  expect(isWon).toBe(true);
});

test('test calculate winner 3 matches in ferst field and 0 second field', () => {
  const isWon = handleCalculateWinner(
    [1, 2, 3, 4, 5, 6, 7, 8], // select ferst
    [1, 2], // select second
    [8, 7, 6, 12, 13, 14, 15, 16], //random fers
    [20, 6], // random second
  );
  expect(isWon).toBe(false);
});

test('test calculate winner 1 matches in ferst field and 1 second field', () => {
  const isWon = handleCalculateWinner(
    [1, 2, 3, 4, 5, 6, 7, 8], // select ferst
    [1, 2], // select second
    [8, 9, 10, 12, 13, 14, 15, 16], //random fers
    [1, 6], // random second
  );
  expect(isWon).toBe(false);
});
