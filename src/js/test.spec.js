import {sayHello} from './test.js';

describe('say hello::', () => {
  it('Say hello', () => {
    expect( sayHello(Dima)).toEqual('Hello, Dima!');
  });
});

