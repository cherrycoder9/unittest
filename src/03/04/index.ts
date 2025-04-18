// Path: src\03\04\index.ts
/* 코드 3-6
export function add(a: number, b: number) {
  return a + b;
}
*/

export function add(a: number, b: number) {
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
