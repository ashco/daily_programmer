// https://www.codewars.com/trainer/javascript

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10


// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10


function goodVsEvil(good, evil){
  const valueCalc = (array, valueKey) => {
    return array.split(' ').reduce((total, current, index) => {
      return total + (current * valueKey[index]);
    }, 0)
  };
  const goodVal = valueCalc(good, [1, 2, 3, 3, 4, 10]);
  const evilVal = valueCalc(evil, [1, 2, 2, 2, 3, 5, 10]);

  return goodVal > evilVal ? "Battle Result: Good triumphs over Evil" :
         evilVal > goodVal ? "Battle Result: Evil eradicates all trace of Good" :
                             "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));