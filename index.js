function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Compare the word with its reverse
  return word === word.split('').reverse().join('');
}

// Custom test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;

