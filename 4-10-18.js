// https://www.reddit.com/r/dailyprogrammer/

const intergerComplexity1 = (int) => {
  const sqrt = Math.sqrt(int);
  const sumArr = [];

  for(let i = 1; i <= sqrt; i += 1){
    if (int % i === 0){
      sumArr.push(i + int / i);
    }
  }
  return sumArr.pop()
}


const test1 = intergerComplexity1(12);  // 12 => 7
const test2 = intergerComplexity1(456);  // 456 => 43
const test3 = intergerComplexity1(4567);  // 4567 => 4568
const test4 = intergerComplexity1(12345);  // 12345 => 838

console.log(intergerComplexity1(1234567891011)); // 2544788
// console.log(test2);
// console.log(test3);
// console.log(test4);