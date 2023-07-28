const missingInteger = (arr) => {
  // total
  const num = 45;

  // expecetd sum
  const expectedSum = (num * (num + 1)) / 2;

  // sum of elements in array
  const arraySum = arr.reduce((sum, num) => sum + num, 0);

  // missing number
  const missing = expectedSum - arraySum;

  return missing;
};

// populate array with 18 missing
const arr = [];
for (let i = 1; i <= 45; i++) {
  if (i === 18) {
    continue;
  }
  arr.push(i);
}

console.log(missingInteger(arr));
