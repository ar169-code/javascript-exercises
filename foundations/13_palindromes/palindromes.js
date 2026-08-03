const palindromes = function (string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"

    const cleanedString = string.split("").filter((item) => alphabet.includes(item.toLowerCase())).join("")

    const reversedString = cleanedString.split("").reverse().join("")

    return reversedString.toLowerCase() === cleanedString.toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
