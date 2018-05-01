// https://www.reddit.com/r/dailyprogrammer/comments/6jr76h/20170627_challenge_321_easy_talking_clock/

const talkingClock = (time) => {
  const tens = ["o'", "", "twenty", "thirty", "fourty", "fifty"];
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

  let [hour, minute] = time.split(':');
  [hour, minute] = [parseInt(hour), parseInt(minute)];

  let ampm;
  (hour < 12) ? ampm = 'am' : ampm = 'pm';

  if (minute === 00) {
    return `It's ${ones[(hour % 12)]} ${ampm}`;
  }
  else if (minute < 10) {
    return `It's ${ones[(hour % 12)]} ${tens[0]}${ones[minute]} ${ampm}`;
  }
  else if (minute < 20 ) {
    return `It's ${ones[(hour % 12)]} ${ones[minute]} ${ampm}`;
  }
  else {
    let [minTen, minOne] = String(minute).split('');
    [minTen, minOne] = [parseInt(minTen), parseInt(minOne)];
    return `It's ${ones[(hour % 12)]} ${tens[minTen]}${ones[minOne]} ${ampm}`;
  }
}




console.log(talkingClock('00:00'));
console.log(talkingClock('01:30'));
console.log(talkingClock('12:05'));
console.log(talkingClock('14:01'));
console.log(talkingClock('20:29'));
console.log(talkingClock('21:00'));
console.log(talkingClock('13:17'));