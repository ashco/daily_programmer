// F5 recap
// 1
const str1 = 'abcd';
const str2 = 'wooderchuk';

const func1 = (a, b) => {
  const aArr = a.split('');
  const bArr = b.split('');
  const cArr = [];
  let c;

  const loopLen = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < loopLen; i++) {
    cArr.push(aArr[i]);
    cArr.push(bArr[i]);
  }

  c = cArr.join('');
  return c;
}

// console.log(func1(str1, str2));

// 2
const side1 = [3, 4, 55];
const side2 = [5, 55, 29];
const side3 = [4, 21, 34];

const func2 = (arr1, arr2, arr3) => {
  const len = side1.length;
  const ansArr = [];

  for (let i = 0; i < len; i++) {
    if (
      arr1[i] + arr2[i] > arr3[i] &&
      arr1[i] + arr3[i] > arr2[i] &&
      arr2[i] + arr3[i] > arr1[i]
    ) {
      ansArr.push('YES');
    }
    else {
      ansArr.push('NO');
    }
  }
  return ansArr;
}

// console.log(func2(side1, side2, side3))


// 3

const list3 = [1, 2, 4, 4, 34, 2, 21, 7, 9, 20];

const func3 = (arr, target) => {
  
}


console.log(func3(list3, 22));