const strLength = (str) => {
    return str.length;
};

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

const capitalize = (str) => {
    if (typeof str !== "string") {
        throw new Error("str or input must be a string");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export { strLength, reverseString, capitalize };
