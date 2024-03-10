function findSubsequenceCount(mainString, subsequence) {
    // Initialize count of occurrences
    let count = 0;

    // Function to check if the given subsequence is present at the specified index of the main string
    function checkSubsequence(index, subIndex) {
        // Base case: If subIndex reaches the end of the subsequence, it means we found a match
        if (subIndex === subsequence.length) {
            count++;
            return;
        }

        // Base case: If index reaches the end of the main string, no match is found
        if (index === mainString.length) {
            return;
        }

        // If the characters at the current positions match, move to the next character of the subsequence
        if (mainString[index] === subsequence[subIndex]) {
            checkSubsequence(index + 1, subIndex + 1);
        }

        // Move to the next character of the main string
        checkSubsequence(index + 1, subIndex);
    }

    // Start the search from the beginning of the main string
    checkSubsequence(0, 0);

    return count;
}

// Example usage:
const mainString = "ababc";
const stringToSearch = "abc";
const count = findSubsequenceCount(mainString, stringToSearch);
console.log(`Occurrences of '${stringToSearch}' in '${mainString}': ${count}`);
