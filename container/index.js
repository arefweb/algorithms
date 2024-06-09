const arr = [3, 2, 5, 1, 8];

function maxContainer(inputArr) {
  let candidates = [];
  for (let i = 0; i < inputArr.length; i++) {
    const current = i;
    inputArr.slice(current + 1).forEach((item, index) => {
      const area = Math.min(item, inputArr[current]) * (index + 1);
      candidates.push(area);
    });
  }
  return Math.max(...candidates);
}

console.log('max of container area > ', maxContainer(arr));

module.exports = maxContainer;