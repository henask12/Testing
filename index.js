const strLength = (str) => {
    return str.length;
};

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

export { strLength, reverseString };
