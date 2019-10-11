const arr = [7, 2, 9, 2, 5, 7, 9, 1, 5, 8];

const mapUsed = arr.map(e => console.log(e));

const reduceUsed = arr.reduce((acc, cur) => acc + cur, 0);

console.log(mapUsed, reduceUsed);
