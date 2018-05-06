// FREE CODE CAMP EXERCISES

// function truncateString(str, num) {
//   let ans = '';

//   if (str.length <= num){
//     ans = str;
//   }
//   else if (num > 3) {
//     ans = str.slice(0, num - 3) + '...';
//     // ans = str.slice(0, num - 3) + '...';
//   }
//   else if (num <= 3) {
//     ans = str.slice(0, num) + '...';
//   }
//   return ans;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// console.log(truncateString("Absolutely Longer", 2));



// function mutation(arr) {
//   let [str1, str2] = [arr[0].toLowerCase(), arr[1].toLowerCase()];


// }

// mutation(["Hello", "hey"]);


// function destroyer(arr) {
//   let args = Array.from(arguments);
//   let [list, nums] = [args.slice(0, 1), args.slice(1)];
//   console.log(list);
//   list[0].forEach(el => {
//                console.log(!nums.includes(el));
//   })
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// function getIndexToIns(arr, num) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let ansIndex;
//   ansIndex = sortedArr.findIndex(el => el >= num);
//   if (ansIndex === -1) {
//     ansIndex = arr.length;
//   }
//   return ansIndex;

// }

// console.log(getIndexToIns([2, 5, 10], 15))



// function rot13(str) { // LBH QVQ VG!
//   let strArr = str.split(' ');
//   return strArr.map(word => {
//     let wordChars = [];
//     for (let i = 0; i < word.length; i++) {
//       let char = word.charCodeAt(i)
//       char += 13;
//       if (char > 90) {
//         char -= 26;
//       }
//       wordChars.push(char);
//     }
//     return String.fromCharCode(...wordChars);
//   }).join(' ');
// }

// // Change the inputs below to test
// console.log(rot13("LBH QVQ VG"));



// function rot13(str) { // LBH QVQ VG!
//   return str
//     .split('')
//     .map(char => {
//       let charCode = char.toUpperCase().charCodeAt();
//       if (charCode >= 65 && charCode <= 90) {
//         charCode += 13;
//         if (charCode > 90) {
//           charCode -= 26;
//         }
//       }
//       return String.fromCharCode(charCode);
//     })
//     .join('');
// }


// // Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC"));



// function sumAll(arr) {
//   let [low, high] = [Math.min(...arr), Math.max(...arr)];
//   let sum = 0;
//   for (low; low <= high; low++) {
//     sum = sum + low;
//   }

//   return sum;

// }

// console.log(sumAll([1, 4]));


// function diffArray(arr1, arr2) {
//   let filteredArr1 = arr1.filter(num1 => arr2.every(num2 => num1 !== num2));
//   let filteredArr2 = arr2.filter(num2 => arr1.every(num1 => num2 !== num1));
//   let newArr = [...filteredArr1, ...filteredArr2];

//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));



// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// I
// V
// X
// L
// C
// D
// M

// function convertToRoman(num) {
//   const printer = (number, symbol) => {
//     let str = '';
//     for (let i = 0; i < number; i++) {
//       str += symbol;
//     }
//     return str;
//   }

//   const key = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   }

//   let ans = '';

//   for (letter in key) {
//     ans += printer(Math.floor(num / key[letter]), letter);
//     num = num % key[letter];
//   }
//   return ans;
// }

// console.log(convertToRoman(674));



// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
//   const searchKeys = Object.keys(source);
//   arr = collection.filter(obj => {
//     return searchKeys.every(key => {
//       return obj[key] === source[key];
//     });
//   });
//   // Only change code above this line
//   return arr;
// }

// console.log(whatIsInAName([{
//   first: "Romeo", last: "Montague"
// }, {
//   first: "Mercutio", last: null
// }, {
//   first: "Tybalt", last: "Capulet"
// }], { last: "Capulet" }));
// console.log(whatIsInAName([
//   { "a": 1, "b": 2 },
//   { "a": 1 },
//   { "a": 1, "b": 2, "c": 2
// }], { "a": 1, "b": 2 }));
// console.log(whatIsInAName([
//   { "a": 1, "b": 2 },
//   { "a": 1 },
//   { "a": 1, "b": 2, "c": 2
// }], { "a": 1, "c": 2 }));



// function myReplace(str, before, after) {
//   if (before[0] === before[0].toUpperCase()) {
//     after = after[0].toUpperCase() + after.slice(1);
//   }

//   return str.replace(before, after);

// }

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));



// function translatePigLatin(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const vIndex = vowels
//     .map(vowel => str.indexOf(vowel))
//     .filter(num => num >= 0)
//     .sort((a, b) => a - b);

//   return vIndex[0] === 0
//     ? str + 'way'
//     : str.slice(vIndex[0]) + str.slice(0, vIndex[0]) + 'ay';
// }

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("california")); // "aliforniacay".
// console.log(translatePigLatin("paragraphs")); // "aragraphspay".
// console.log(translatePigLatin("glove")); // "oveglay".
// console.log(translatePigLatin("algorithm")); // "algorithmway".
// console.log(translatePigLatin("eight")); // "eightway"



// function pairElement(str) {
//   const key = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C'
//   }
//   return [...str].map(letter => [letter, key[letter]]);
// }

// pairElement("GCG");

// console.log(pairElement("ATCGA")) // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement("TTGAG")) // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement("CTCTA")) // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]



// function fearNotLetter(str) {
//   const [first, last] = [str.charCodeAt(0), str.charCodeAt(str.length - 1)]
//   const codeArr = [...str].map(letter => letter.charCodeAt());
//   let ans;

//   for (let i = first; i < last; i++) {
//     if (!codeArr.includes(i)) {
//       if (typeof ans === 'undefined') {
//         ans = '';
//       }
//       ans += String.fromCharCode(i);
//     }
//   }
//   return ans;
// }



// console.log(fearNotLetter("abce")) // "d"
// console.log(fearNotLetter("abcdefghjklmno")) // "i"
// console.log(fearNotLetter("bcd")) // undefined
// console.log(fearNotLetter("yz")) // undefined


// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return typeof bool === 'boolean';
// }

// booWho(null);

// console.log(booWho(true)) //true.
// console.log(booWho(false)) //true.
// console.log(booWho([1, 2, 3])) //false.
// console.log(booWho([].slice)) //false.
// console.log(booWho({ "a": 1 })) //false.
// console.log(booWho(1)) //false.
// console.log(booWho(NaN)) //false.
// console.log(booWho("a")) //false.
// console.log(booWho("true")) //false.
// console.log(booWho("false")) //false.



// function uniteUnique(arr) {
//   return Array.from(arguments)
//     .reduce((total, arg) => total.concat(arg), [])
//     .reduce((total, current) => {
//       if (!total.includes(current)) total.push(current);
//       return total;
//     }, []);
// }


// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) //[1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])) // [1, 3, 2, [5], [4]].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // [1, 2, 3, 5].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // [1, 2, 3, 5, 4, 6, 7, 8].



function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");


console.log(convertHTML("Dolce & Gabbana")) // Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")) // Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')) // Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Shindler's List")) // Shindler&​apos;s List.
console.log(convertHTML("<>")) // &​lt;&​gt;.
console.log(convertHTML("abc")) // abc.