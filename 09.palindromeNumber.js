var isPalindrome = function(x) { 
  if(x < 0) {
    return false;
  }

  let inverso = 0;
  let atual =  x;
  
  while(atual !== 0) {
    inverso = inverso * 10 + atual % 10;
    atual = Math.floor(atual/10);
  }

  return x === inverso;
};
  
console.log(isPalindrome(121))

/*
 1. Condition if "x" is negative;
    a. Return false.
2. Create reversed variable.
3. Create current variable equal to x.
4. While loop for current doens't equal to 0.
  a. Set reverse equal to reversed * 10 + current mod 10.
  b. Divide current by 10.
5. Return if "x" is equl to reversed
*/