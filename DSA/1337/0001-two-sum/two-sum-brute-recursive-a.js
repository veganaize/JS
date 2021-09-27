console.log( twoSum([2,7,11,15], 9) );  // [0,1]
console.log( twoSum([3,2,4], 6)     );  // [1,2]
console.log( twoSum([3,3], 6)       );  // [0,1]
console.log( twoSum([4,4,3,3], 6)   );  // [2,3]
console.log( twoSum([6,4,4,0,3], 6) );  // [0,3]
console.log( twoSum([1000000000,3,9,-5,-999999994], 6) );  // [0,4]


function twoSum(nums, target) {
    arguments[2] = arguments[2] || 0;  /* i */
    arguments[3] = arguments[3] || 1;  /* j */

    /* Not as pure as 'b' version because of assignments! */
    if (arguments[3] == nums.length) {
        arguments[2] += 1;
        arguments[3]  = arguments[2]+1;
    }

    if (target == nums[arguments[2]] + nums[arguments[3]]) {
        return [arguments[2], arguments[3]];
    }

    return twoSum(nums, target, arguments[2], arguments[3]+1);
}
