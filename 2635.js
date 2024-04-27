/* 2635. Apply Transform Over Each Element in Array
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/


var arr = [1, 2, 3];
/* Example 1 - Output: [2,3,4]*/
/* const fn = (n) => { return n + 1; }; */
/* Example 2 - Output: [1,3,5]*/
const fn = (n, i) => { return n + i; };
/* Example 3 - Output: [42,42,42]*/
/* const fn = () => { return 42; } */


var map = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {

        newArray.push(fn(arr[i], i));
    }
    return newArray;
}

console.log(map(arr, fn));