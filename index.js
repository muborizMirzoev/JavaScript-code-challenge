// function palindrome(str) {
//   const symbols = '*#+-_,.:)(\/| ';
//   const strLowerCase = str.toLowerCase();

//   const removeSymbols = [...strLowerCase].filter((item) =>  symbols.includes(item) ? false : item);

//   const reverseString = [...removeSymbols].reverse().join('');

//   return (reverseString === removeSymbols.join('')) ? true :false;

// }



// // palindrome("eye");

// palindrome("five|\_/|four");
// palindrome("My age is 0, 0 si ega ym.")