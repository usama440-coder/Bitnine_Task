const reverseString = (s) => {
  let split = s.split("");
  let reversed = split.reverse();
  let joined = reversed.join("");

  return joined;
};

const checkPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      // reverse a String
      const a = reverseString(s);
      return a;
    }
  }

  return "palindrome";
};

console.log(checkPalindrome("hello"));
