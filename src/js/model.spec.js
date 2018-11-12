import {model} from './model.js';

describe('model::', () => {
  it('Have properties', () => {
    expect(model).toHaveProperty('timer');
    expect(model).toHaveProperty('maxClicks');
    expect(model).toHaveProperty('curClicks');
    expect(model).toHaveProperty('maxClicksEver');
    expect(model).toHaveProperty('curLevel');
    expect(model).toHaveProperty('levels');
    expect(model.timer).not.toBeLessThan(0);
    expect(model.maxClicks).not.toBeLessThan(0);
    expect(model.maxClicks).not.toBeLessThan(model.curClicks);
    expect(model.maxClicksEver).not.toBeLessThan(model.curClicks);
  });
});
