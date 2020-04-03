export function clipMinMax(num, min, max) {
  let tmpNum = num;
  if (tmpNum < min) tmpNum = min;
  if (tmpNum > max) tmpNum = max;
  return tmpNum;
}

export function sum(vec) {
  return vec.reduce((a, i) => a + i);
}

export function max(vec) {
  return vec.reduce((a, i) => (i > a ? i : a));
}

export function magnifyVecTo1(vec) {
  let maxIn = max(vec);
  if (maxIn != 0) {
    const scale = 1 / maxIn;
    let scaledVec = vec.map(e => e * scale);
    return scaledVec;
  }
  return vec;
}
