const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    (console.log(`✅  Assertion passed: ${array1} === ${array2}`));
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};



const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/ /g,"") ;

  // logic to update results here
  for(let i = 0; i < sentence.length; i++){
    //if sentence is a key of results 
    if(results[sentence[i]]){
      //pushing to position array 
      results[sentence[i]].push(i)
    } else {
      //create new array & key 
      results[sentence[i]] = [i]
    }

  };
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [0]);
assertArraysEqual(letterPositions("hello").h, [4]);