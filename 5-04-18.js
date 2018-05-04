// function getMiddle(s) {
//   const len = s.length;
//   return len % 2 === 0
//    ? s.slice(Math.floor(len/2)-1, Math.floor(len/2)+1)
//    : s.slice(Math.floor(len/2), Math.floor(len/2)+1)
// }

// console.log(getMiddle('Whatsup'));
// console.log(getMiddle('Hoonoo'));
// console.log(getMiddle('Tada'));


// function solution(str){
//   const arr = [];
//   if (str.length % 2 !== 0) {
//     str += '_';
//   }
//   for (let i = 0; i < str.length; i += 2) {
//     arr.push(str.slice(i, i + 2));
//   }
//   return arr;
// }


// console.log(solution('abc')); // should return ['ab', 'c_']
// console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']



// function anagrams(word, words) {
//   const sortFnc = (str) => str.split('').sort().join('');

//   return words.filter(testWord => sortFnc(word) === sortFnc(testWord));
// }

// String.prototype.sort = function () {
//   return this.split('').sort().join('');
// }

// const anagrams = (word, words) => words.filter(w => word.sort() === w.sort());


// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))


function compoundMatch(words, target) {
  for (let i = 1; i < target.length; i++) {
    const target1 = target.slice(0, i);
    const target2 = target.slice(i, target.length);

    if (words.includes(target1) && words.includes(target2)) {
      let order = [words.indexOf(target1), words.indexOf(target2)]
      let sortOrder = order.slice(0);
      sortOrder.sort(((a, b) => a - b));
      return [words[sortOrder[0]] ,words[sortOrder[1]] , order];
    }
  }
  return null;
}



console.log(compoundMatch( ['super','bow','bowl','tar','get','book','let'], "superbowl"))   //['super','bowl',   [0,2]]
console.log(compoundMatch( ['bow','crystal','organic','ally','rain','line'], "crystalline"))//['crystal','line', [1,5]]
console.log(compoundMatch( ['bow','crystal','organic','ally','rain','line'], "rainbow"))    //['bow','rain',     [4,0]]
console.log(compoundMatch( ['bow','crystal','organic','ally','rain','line'], "organically"))//['organic','ally', [2,3]]
console.log(compoundMatch( ['top','main','tree','ally','fin','line'], "mainline"))          //['main','line',    [1,5]]
console.log(compoundMatch( ['top','main','tree','ally','fin','line'], "treetop"))           //['top','tree',     [2,0]]