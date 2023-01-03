// A function to remove items from an array.
const removeFromArray = function (...contents) {
    const array = contents[0];
    const newArray = [];
    array.forEach((item) => {
        if (!contents.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
