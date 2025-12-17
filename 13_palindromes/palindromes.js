const palindromes = function (s) {
    const onlyChars = s.replace(/[^0-9a-zA-Z]/g, '');
    const modifiedString = onlyChars.toLowerCase
    for (let i = 0; i < Math.ceil(modifiedString.length / 2); i++) {
        if (modifiedString[i] != modifiedString.at(-1 - i)) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
