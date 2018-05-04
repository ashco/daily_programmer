// https://www.reddit.com/r/dailyprogrammer/comments/8eger3/20180423_challenge_358_easy_decipher_the_seven/

const input = `
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`

// 1 2 3 4 5 6 7 8 9

function translator (input) {
  const numArr = ['','','','','','','','',''];

  let string = input.replace(/\n/g, '');

  console.log(string.slice(0, 3));

  for (let i = 0; i < 27 * 3; i+=3) {
    console.log(i);
    numArr[i/3%9] += string.slice(i, i + 3);
  }


  return numArr;
}

console.log(translator(input));