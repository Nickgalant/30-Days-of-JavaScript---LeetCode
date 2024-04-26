var arr = [1, 2, 3];
const fn = (n, i) => { return n + i; };
/* const fn = (n) => { return n + 1; }; */
/* const fn = () => { return 42; } */


var map = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {

        newArray.push(fn(arr[i], i));
    }
    return newArray;
}

console.log(map(arr, fn));