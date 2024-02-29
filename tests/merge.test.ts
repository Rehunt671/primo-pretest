import { MergeService } from "../src/merge";
describe('MergeService', () => {
  let mergeService: MergeService;

  beforeEach(() => {
    mergeService = new MergeService();
  });

  describe('mergeASC', () => {
    it('should merge arrays in ascending order', () => {
      const a1 = [1, 3, 5];
      const a2 = [2, 4, 6];
      const a3 = [8 ,7 ,0];
      const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      expect(mergeService.mergeASC(a1, a2, a3)).toEqual(expected);
    });
  });

  describe('mergeDEC', () => {
    it('should merge arrays in descending order', () => {
      const a1 = [1, 3, 5];
      const a2 = [2, 4, 6];
      const a3 = [8 ,7 ,0];
      const expected = [8, 7, 6, 5, 4, 3, 2, 1, 0];
      expect(mergeService.mergeDEC(a1, a2, a3)).toEqual(expected);
    });
  });
});
