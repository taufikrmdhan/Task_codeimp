function checkPalindrome(kata) {
  const len = kata.length;
  for (let i = 0; i < len / 2; i++) {
    if (kata[i] !== kata[len - 1 - i]) {
      return "Tidak palindrome";
    }
  }
  return "Palindrome";
}

console.log(checkPalindrome("mala"));
