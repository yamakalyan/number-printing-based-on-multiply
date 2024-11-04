// wanted to try in new so did it with map function
const mappingNumbers = Array.from({ length: 100 }).map((_, index) => {
  const number = index + 1;
  // We check for multiples of both 3 and 5 first.
  // This is important because if we check for 3 and 5 first,
  // the condition for "amazon" would never be reached for numbers like 15.

  if (number % 3 === 0 && number % 5 === 0) {
    return 'amazon';
  }
  if (number % 3 === 0) {
    return 'google';
  }
  if (number % 5 === 0) {
    return 'facebook';
  }
  // Return the number if none of the conditions are met
  return number;
});

console.log(mappingNumbers);
