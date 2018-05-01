// https://www.reddit.com/r/dailyprogrammer/comments/8g0iil/20180430_challenge_359_easy_regular_paperfold/

function paperFold (folds) {
  const paper = [1];
  for (let i = 1; i <= folds; i++) {
    let newNums = [];
    while (newNums.length < Math.pow(2, i)) {
      newNums = newNums.concat([1, 0]);
    }
    for (let j = newNums.length - 1; j >= 0; j--) {
      paper.splice(j, 0, newNums[newNums.length - 1]);
      newNums.pop();
    }
  }
  return paper.join('');
}

console.log(paperFold(8));


