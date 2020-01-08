const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(string) {
  string = string.split(" ");
  string = string.join("");
  let count = {};

  for(const letters of string){
    if(count[letters]) {
      count[letters] += 1;
    } else {
      count[letters] = 1;
    }
  }
  return count;
};

console.log(countLetters("lighthouse"));

let answer = countLetters("lighthouse")

assertEqual(answer["l"],1);
assertEqual(answer["i"],1);
assertEqual(answer["g"],1);
assertEqual(answer["h"],2);
assertEqual(answer["o"],1);
assertEqual(answer["u"],1);
assertEqual(answer["s"],1);
assertEqual(answer["e"],1);
