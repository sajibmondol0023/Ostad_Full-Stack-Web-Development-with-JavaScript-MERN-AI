// 1) calculateDifference
function calculateDifference(a, b) {
  return a - b;
}
console.log(calculateDifference(10, 4));
// 2) isOdd
function isOdd(number) {
  return number % 2 !== 0;
}
console.log(isOdd(7)); 
// 3) findMin
function findMin(numbers) {
  return Math.min(...numbers);
}
console.log(findMin([3, 1, 7, 2, 9])); 
// 4) filterEvenNumbers
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// 5) sortArrayDescending
function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([3, 1, 4, 1, 5]));
// 6) lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));
// 7) findAverage
function findAverage(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
console.log(findAverage([10, 20, 30, 40]));  
// 8) isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));  
