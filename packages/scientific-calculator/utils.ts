import { multiply } from '@calculator/core';

export const power = (base: number, exponent: number): number => {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result = multiply(result, base);
  }
  return result;
}; 