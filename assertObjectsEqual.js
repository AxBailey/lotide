const eqObjects = function(object1, object2){
  // determine if both objects have the same number of keys 
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);


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
  };
  //if non of these value false, value is true 
  return true;
}



const assertObjectEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)){
    console.log(`✅  Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑  Assertion failed: ${inspect(object1)} !== ${inspect(object)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectEqual({ a: "1", b: "2" },{b: "2", a: "1"} )




