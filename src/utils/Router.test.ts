import { expect } from 'chai';
import Router, { BlockConstructable } from './Router';

describe.only('Router', () => {
  const BlockMock = class {
    getContent() {
      return document.createElement('div');
    }
  } as unknown as BlockConstructable;

  it('should return Router instance', () => {
    const result = Router.use('/', BlockMock);
    expect(result).to.eq(Router);
  });
});
