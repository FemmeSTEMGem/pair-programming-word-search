const transpose = function(matrix) {
    const newArray = [];
    const placeholderArray = [];

    if (matrix.length === 1) {
    matrix[0].forEach((element) => {
        newArray.push([element]);
    });
    return newArray;
    }
    for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix.length; c++) {
        placeholderArray.push(matrix[c][r]);
    }
        newArray.push(placeholderArray);
    if (newArray.length === matrix[r].length) {
        break;
    }
    }
    return newArray;
};


const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};


module.exports = wordSearch;