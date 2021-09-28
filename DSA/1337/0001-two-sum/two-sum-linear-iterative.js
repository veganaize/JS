/**
 * Given an array of integers nums and
 * an integer target, return indices of
 * the two numbers such that they add up
 * to target.
 *
 * You may assume that each input would
 * have exactly one solution, and you
 * may not use the same element twice.
 */


function twoSum(nums, target) {
    var hashmap = {};

    for (var i = 0; i < nums.length; i++) {
        /* Index of other addend present ? */
        if (hashmap[nums[i]] != undefined) return [hashmap[nums[i]], i];

        /* Index of current addend NOT present ? */
        if (hashmap[target-nums[i]] == undefined) {
            hashmap[target-nums[i]] = i;
        } else {
        /* Index of current addend already present */
            /* Doubling current addend equals target ? */
            if (nums[i] * 2 == target) {
                return [hashmap[target-nums[i]], i];
            }
        }
    }
}


console.log( twoSum([2,7,11,15], 9) );  // [0,1]
console.log( twoSum([3,2,4], 6)     );  // [1,2]
console.log( twoSum([3,3], 6)       );  // [0,1]
console.log( twoSum([4,4,3,3], 6)   );  // [2,3]
console.log( twoSum([6,4,4,0,3], 6) );  // [0,3]
console.log( twoSum([1000000000,3,9,-5,-999999994], 6) );  // [0,4]

for (var i = 1, arr = []; i <= 10000; arr.push(i++));
console.log( twoSum(arr, 19999) );  // [9998,9999]
