function isDivisible(n, x, y) {

  return n % x == 0 && n % y == 0 ? true : false

}

console.log(isDivisible(10, 5, 7))


// parameter: n, x, y
// return: boolean
// e.g. isDivisible(10, 5, 7)
// results in false

// check if the remainder of n / x is 0
// and
// if the remainder of n / y is 0
// if both are true return true
// else return false
