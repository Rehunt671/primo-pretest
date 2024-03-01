import { MergeService } from "../src/merge";
describe("MergeService", () => {
  let mergeService: MergeService;

  beforeEach(() => {
    mergeService = new MergeService();
  });
  describe("mergeASC", () => {
    it("should merge arrays in ascending order (Happy case)", () => {
      const a1: number[] = [1, 3, 5];
      const a2: number[] = [2, 4, 6];
      const a3: number[] = [8, 7, 0];
      const expected: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      expect(mergeService.mergeASC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in ascending order (Case with one empty array)", () => {
      const a1: number[] = [1, 3, 5];
      const a2: number[] = [];
      const a3: number[] = [8, 7, 0];
      const expected: number[] = [0, 1, 3, 5, 7, 8];
      expect(mergeService.mergeASC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in ascending order (Case with all empty arrays)", () => {
      const a1: number[] = [];
      const a2: number[] = [];
      const a3: number[] = [];
      const expected: number[] = [];
      expect(mergeService.mergeASC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in ascending order (Case with duplicate elements)", () => {
      const a1: number[] = [1, 2, 3];
      const a2: number[] = [3, 4, 5];
      const a3: number[] = [7, 6, 5];
      const expected: number[] = [1, 2, 3, 3, 4, 5, 5, 6, 7];
      expect(mergeService.mergeASC(a1, a2, a3)).toEqual(expected);
    });
  });

  describe("mergeDEC", () => {
    it("should merge arrays in descending order (Happy case)", () => {
      const a1: number[] = [1, 3, 5];
      const a2: number[] = [2, 4, 6];
      const a3: number[] = [8, 7, 0];
      const expected: number[] = [8, 7, 6, 5, 4, 3, 2, 1, 0];
      expect(mergeService.mergeDEC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in descending order (Case with one empty array)", () => {
      const a1: number[] = [1, 3, 5];
      const a2: number[] = [2, 4, 6];
      const a3: number[] = [];
      const expected: number[] = [6, 5, 4, 3, 2, 1];
      expect(mergeService.mergeDEC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in descending order (Case with all empty array)", () => {
      const a1: number[] = [];
      const a2: number[] = [];
      const a3: number[] = [];
      const expected: number[] = [];
      expect(mergeService.mergeDEC(a1, a2, a3)).toEqual(expected);
    });

    it("should merge arrays in descending order (Case with duplicate elements)", () => {
      const a1: number[] = [1, 3, 5];
      const a2: number[] = [2, 4, 6];
      const a3: number[] = [6, 0];
      const expected: number[] = [6, 6, 5, 4, 3, 2, 1, 0];
      expect(mergeService.mergeDEC(a1, a2, a3)).toEqual(expected);
    });
  });
});
