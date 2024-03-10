function countSubsequenceOccurrences(arr, subsequence) {
    let count = 0;
    for (let str of arr) {
        count += countSubsequenceInString(str, subsequence);
        console.log(`String: "${str}", Subsequence: "${subsequence}", Count: ${count}`);
    }
    return count;
}

function countSubsequenceInString(str, subsequence) {
    // Recursive function to count occurrences of subsequence in a string
    console.log(`Checking subsequence "${subsequence}" in string "${str}"`);
    if (subsequence.length === 0) {
        console.log(`Subsequence found in string "${str}"`);
        return 1; // If subsequence is empty, it's found once
    }
    if (str.length === 0) {
        console.log(`Subsequence not found in string "${str}"`);
        return 0; // If string is empty, subsequence cannot be found
    }
    if (str[0] === subsequence[0]) {
        // If the first characters match, count occurrences with and without using the first character
        console.log(`First characters match: "${str[0]}"`);
        return (
            countSubsequenceInString(str.substring(1), subsequence.substring(1)) +
            countSubsequenceInString(str.substring(1), subsequence)
        );
    } else {
        // If the first characters don't match, continue with the rest of the string
        console.log(`First characters do not match: "${str[0]}"`);
        return countSubsequenceInString(str.substring(1), subsequence);
    }
}

// Example usage:
const arr = ["ab"];
const subsequence = "a";
console.log(`Array: [${arr}]`);
console.log(`Subsequence to find: "${subsequence}"`);
console.log(`Total count: ${countSubsequenceOccurrences(arr, subsequence)}`);
