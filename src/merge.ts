const merge = function (a1: number[], a2: number[]) {
  let i = a1.length - 1;
  let j = a2.length - 1;
  let k = a1.length + a2.length - 1;

  while (j >= 0) {
    if (i >= 0 && a1[i] > a2[j]) {
      a1[k--] = a1[i--];
    } else {
      a1[k--] = a2[j--];
    }
  }
  return a1;
};

export interface IMerge {
  mergeASC(a1: number[], a2: number[], a3: number[]): number[];
  mergeDEC(a1: number[], a2: number[], a3: number[]): number[];
}

export class MergeService implements IMerge {
  mergeASC(a1: number[], a2: number[], a3: number[]): number[] {
    return merge(merge(a1, a2), a3.reverse());
  }

  mergeDEC(a1: number[], a2: number[], a3: number[]): number[] {
    return this.mergeASC(a1, a2, a3).reverse();
  }
}

const mergeService = new MergeService();
const a1: number[] = [1, 2, 3];
const a2: number[] = [3, 4, 5];
const a3: number[] = [7, 6, 5];

const result = mergeService.mergeASC(a1, a2, a3);
console.log(result);
