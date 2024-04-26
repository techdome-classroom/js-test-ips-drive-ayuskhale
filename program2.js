function longestSubstring(s) {
    if (!s) return 0;

    let charIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndex && charIndex[s[end]] >= start) {
            start = charIndex[s[end]] + 1;
        } else {
            maxLength = Math.max(maxLength, end - start + 1);
        }
        charIndex[s[end]] = end;
    }

    return maxLength;
}

module.exports = { longestSubstring };

// Example usage:
// const { longestSubstring } = require('./longestSubstring');
// const inputStr = "abcabcbb";
// console.log(longestSubstring(inputStr)); // Output: 3

