// @flow

import { InvalidArgumentError } from 'errors';

import insertIntoArray from '..';

describe(`insertIntoArray`, (): void => {

  const dummyArray = ['apple', 'banana', 'cucumber'];

  it(`inserts the new element into the array at the given index`, (): void => {
    expect(insertIntoArray(dummyArray, 'watermelon', 0)).toEqual(['watermelon', 'apple', 'banana', 'cucumber']);
    expect(insertIntoArray(dummyArray, 'watermelon', 1)).toEqual(['apple', 'watermelon', 'banana', 'cucumber']);
    expect(insertIntoArray(dummyArray, 'watermelon', 2)).toEqual(['apple', 'banana', 'watermelon', 'cucumber']);
    expect(insertIntoArray(dummyArray, 'watermelon', 3)).toEqual(['apple', 'banana', 'cucumber', 'watermelon']);
  });

  it(`inserts the new element into the array at the given index, when starting out with an empty array`, (): void => {
    expect(insertIntoArray([], 'watermelon', 0)).toEqual(['watermelon']);
  });

  it(`throws an InvalidArgumentError, if the index is less than 0`, (): void => {
    expect((): void => {
      insertIntoArray(dummyArray, 'watermelon', -1);
    }).toThrow(InvalidArgumentError);
  });

  it(`throws an InvalidArgumentError, if the index is outside of the scope of the array`, (): void => {
    expect((): void => {
      insertIntoArray(dummyArray, 'watermelon', 4);
    }).toThrow(InvalidArgumentError);
  });

});
