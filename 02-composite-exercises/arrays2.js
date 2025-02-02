let array = [1, 2, 3, 4, 5];
function sumElements(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumElements(array)); // Output: 15