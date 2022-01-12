/*--------------------------------------------------------------------------------------------
## codewars task -- return true if the number is a square 
                 --return false if it is not a square of a nb
 -------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------
* returning if a number is a square or not with booleans  :METHOD 1
------------------------------------------------------------------------------------------- */

const isSquare = function (n) {
  /*--------------------------------------------------------------------------------------------
  ##short notes : 
  
  the sqrt returns a whole number if the number is a square,if not it returns a faction digit
  modulus returns a remainder hence if a whole number is divided by 1,no remainder hence === 0,if a fraction 
  is divided by 1,a remainder will be present. 
  ---------------------------------------------------------------------------------------------*/
  return Math.sqrt(n) % 1 === 0
}
console.log(isSquare(8)) //false
console.log(isSquare(9)) //true
console.log(isSquare(25)) // true

/*--------------------------------------------------------------------------------------------
#### METHOD 2 
---------------------------------------------------------------------------------------------*/
const isSquare2 = n => {
  var r = Math.sqrt(n)
  return r === Math.floor(r)
}

console.log(isSquare2(34))
console.log(isSquare2(25))

/*-------------------------------------------------------------------------------------------- 
## METHOD 3
-------------------------------------------------------------------------------------------- */

const isSquare3 = n => Number.isInteger(Math.sqrt(n))
/*--------------------------------------------------------------------------------------------
*** if a number is even 
------------------------------------------------------------------------------------------- */
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(5)) // false
console.log(isEven(7.6))  // false
console.log(isEven(8))  // true 

function isOdd(n) {
  return n % 2 === 1;
}

console.log(isEven(5)) // true
console.log(isEven(7.6))  // false
console.log(isEven(8))  // false 


/*--------------------------------------------------------------------------------------------
*** getting a fraction section of a number
------------------------------------------------------------------------------------------- */

function getFractionPart(n) {
  return n % 1;
}
console.log(4.675);

/*--------------------------------------------------------------------------------------------
*** converting minutes to hours
------------------------------------------------------------------------------------------- */

const conversionOfMinutesToHours = n => ({ hours: Math.floor(n / 60), minutes: n % 60 })

/* this method changes minutes to hours and minutes */

console.log(conversionOfMinutesToHours(345));

/*--------------------------------------------------------------------------------------------
## using modulus in negative form
--------------------------------------------------------------------------------------------*/
