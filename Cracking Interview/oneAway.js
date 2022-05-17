// not working solution

function oneEditAway(first, second) {
    // Length check
    if (Math.abs(first.length() - second.length()) > 1) {
        return false;
    }

    // Get shorter and longer string
    let s1 = first.length() < second.length() ? first : second;
    let s2 = first.length() < second.length() ? second : first;

    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;

    while (index2 < s2.length() && index1 < s1.length()) {
        if (s1.charAt(index1) != s2.charAt(index2)) {
            // Ensure that this is the first differene found
            if (foundDifference) return false;
            foundDifference = true;

            if (s1.length() == s2.length()) {
                index1++;
            }
        }
        else {
            index1++; // if matching, move shorter pointer
        }
        index2++; // always move pointer for longer string
    }
    return true;
}

let first = "pale";
let second = "ple";

oneEditAway(first, second);