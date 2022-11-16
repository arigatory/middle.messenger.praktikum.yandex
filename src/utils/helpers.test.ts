import { expect } from 'chai';
import { set } from './helpers';

describe.skip('set function', () => {
  const keypath = 'test';
  const value = 'value';
  let obj: Record<string, unknown>;

  beforeEach(() => {
    obj = {};
  });

  it('should set a value by path to the object', () => {
    // act
    set(obj, keypath, value);

    // assert
    expect(obj).to.haveOwnProperty(keypath, value);
  });

  it('should return original object', () => {
    // act
    const result = set(obj, keypath, value);

    obj.test2 = 'another';

    // assert
    expect(result).to.equal(obj);
  });

  it("should return original object if it's type is not an object", () => {
    // arrange
    const notObj = 'string';

    // act
    const result = set(notObj, keypath, value);

    // assert
    expect(result).to.eq(notObj);
  });

  it('should throw an error if path is not a string', () => {
    // arrange
    const keypathNotAString = 10;

    // act
    // @ts-ignore because we want to check behaviour in runtime
    const f = () => set(obj, keypathNotAString, value);

    // assert
    expect(f).to.throws(Error);
  });
});
