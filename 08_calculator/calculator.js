const add = function(a,b) {
	return a + b 
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a) {
  if(a == undefined || a == 0){
    return 0
  }else{
    return a.reduce((accum,curr) => Number(accum) + Number(curr)) 
  }
};

const multiply = function(a) {
  if(a == undefined || a == 0){
    return 0
  }else{
    return a.reduce((accum,curr) => Number(accum) * Number(curr)) 
  }

};

const power = function(a,b) {
	if(a == undefined || a == 0){
    return 0
  }else{
    let multi = 1; 
    for (i = 0; i < b ; i++){
    multi *= a
  }
  return multi
  }
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
