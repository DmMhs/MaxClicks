import * as view from './view.js';

describe('view::', () => {
  it('Should not contain empty fields', () => {
    expect(document.getElementById('max-clicks').innerHTML).not.toBeNull();
    expect(document.getElementById('current-clicks').innerHTML).not.toBeNull();
    expect(document.getElementById('timer-count').innerHTML).not.toBeLessThan(0);
  });
});
