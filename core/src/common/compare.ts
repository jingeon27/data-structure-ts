export type CompareType = (a: number, b: number) => boolean;

export const compareMax: CompareType = (a, b) => a > b;
export const compareMin: CompareType = (a, b) => a < b;
