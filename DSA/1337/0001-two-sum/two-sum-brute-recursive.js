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
    /* Assign indexes, provide initial default values */
    var i = arguments[2] || 0;
    var j = arguments[3] || 1;

    if (target == nums[i] + nums[j]) return [i, j];

    /* Recurse */
    return twoSum(nums, target,
            /* Increment outter loop (i) ? */
            j == nums.length ? i+1 : i,
            /* Increment inner loop (j) */
            j == nums.length ? i+2 : j+1
    );
}


console.log( twoSum([2,7,11,15], 9) );  // [0,1]
console.log( twoSum([3,2,4], 6)     );  // [1,2]
console.log( twoSum([3,3], 6)       );  // [0,1]
console.log( twoSum([4,4,3,3], 6)   );  // [2,3]
console.log( twoSum([6,4,4,0,3], 6) );  // [0,3]
console.log( twoSum([1000000000,3,9,-5,-999999994], 6) );  // [0,4]
