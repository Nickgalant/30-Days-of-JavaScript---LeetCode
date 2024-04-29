/* 2634. Filter Elements From Array
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) 
returns true.

Please solve it without the built-in Array.filter method.
*/

/* Example 1 -  Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
*/
let arr = [0, 10, 20, 30];
function greaterThan10(n) { return n > 10; }

/* Example 2 - Output: [1] 
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
*/
/* let arr = [1,2,3]; */
function firstIndex(n, i) { return i === 0; }

/* Example 3 - Output: [-2, 0, 1, 2] 
Explanation:
Falsey values such as 0 should be filtered out
*/
/* let arr = [-2, -1, 0, 1, 2]; */
function plusOne(n) { return n + 1 }


var filter = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(filter(arr, greaterThan10));