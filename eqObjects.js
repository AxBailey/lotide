const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


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


const eqObjects = function(object1, object2){
// determine if both objects have the same number of keys 
let key1 = Object.keys(object1)
let key2 = Object.keys(object2)

if (key1.length !== key2.length){ 
    return false;
  }
  for(const value of key1){
    //determine if 1 & 2 are arrays, if so determine equality using eqArray
    if (Array.isArray(object1[value])){
      if( !eqArrays(object1[value], object2[value])){
        return false;
      } 
    }

    //check if primitives are equal 
    else if ( object1[value] !== object2[value]){
      return false;
    }
  }
  //if non of these value false, value is true 
  return true;
}


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true ); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false