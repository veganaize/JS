console.log( twoSum([2,7,11,15], 9) );  // [0,1]
console.log( twoSum([3,2,4], 6)     );  // [1,2]
console.log( twoSum([3,3], 6)       );  // [0,1]
console.log( twoSum([4,4,3,3], 6)   );  // [2,3]
console.log( twoSum([6,4,4,0,3], 6) );  // [0,3]
console.log( twoSum([1000000000,3,9,-5,-999999994], 6) );  // [0,4]


function twoSum(nums, target) {
    for (var i = 0;; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }
}
