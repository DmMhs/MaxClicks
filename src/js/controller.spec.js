import {checkRank, rank, rankImg} from './controller.js';

describe('checkRank::', () => {
  it('Should not have undefined variables/constants', () => {
    expect(rank).toBeDefined();
    expect(rankImg).toBeDefined();
    expect(model.maxClicksEver).toEqual(localStorage.maxClicksEver);
  });
});
